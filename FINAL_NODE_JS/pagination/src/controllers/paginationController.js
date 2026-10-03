const pool = require('../dbConfig/db');

// 1. Offset Pagination
const offsetPagination = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit; // skip the element

        // 1. Data Query (Fetch limited rows)
        const [rows] = await pool.query(
            `SELECT id, contest_date, contest_starttime, contest_endtime, status, max_participants 
             FROM 10_4_quiz_contest_master 
             ORDER BY id DESC 
             LIMIT ? OFFSET ?`,
            [limit, offset]
        );

        // 2. Count Query (To know total records and pages)
        const [totalResult] = await pool.query('SELECT COUNT(*) as count FROM 10_4_quiz_contest_master');
        const totalItems = totalResult[0].count;

        const totalPages = Math.ceil(totalItems / limit);
        const hasNextPage = page < totalPages;
        const hasPrevPage = page > 1;

        res.json({
            success: true,
            data: rows,
            pagination: {
                currentPage: page,
                limit: limit,
                totalPages: totalPages,
                totalItems: totalItems,
                hasNextPage: hasNextPage,
                hasPrevPage: hasPrevPage,
                nextPageUrl: hasNextPage ? `/api/v1/offset?page=${page + 1}&limit=${limit}` : null,
                prevPageUrl: hasPrevPage ? `/api/v1/offset?page=${page - 1}&limit=${limit}` : null
            }
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Keyset (Seek) Pagination
const keysetPagination = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const lastId = parseInt(req.query.last_id); 

        let query = 'SELECT id, contest_date, contest_starttime, contest_endtime, status, max_participants FROM 10_4_quiz_contest_master';
        let params = [];

        // For DESC order, we need items smaller than the last ID seen
        if (lastId) {
            query += ' WHERE id < ?';
            params.push(lastId);
        }

        query += ' ORDER BY id DESC LIMIT ?';
        params.push(limit);

        const [rows] = await pool.query(query, params);
        const nextLastId = rows.length > 0 ? rows[rows.length - 1].id : null;

        res.json({
            success: true,
            data: rows,
            pagination: { 
                limit: limit, 
                next_last_id: nextLastId,
                nextPageUrl: nextLastId ? `/api/v1/keyset?last_id=${nextLastId}&limit=${limit}` : null
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};

// 3. Cursor-Based Pagination (Opaque Token)
const cursorPagination = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const cursor = req.query.cursor;

        let query = 'SELECT id, contest_date, contest_starttime, contest_endtime, status, max_participants FROM 10_4_quiz_contest_master';
        let params = [];

        if (cursor) {
            const decodedStr = Buffer.from(cursor, 'base64').toString('ascii');
            const parsedCursor = JSON.parse(decodedStr);
            query += ' WHERE id < ?'; 
            params.push(parsedCursor.id);
        }

        query += ' ORDER BY id DESC LIMIT ?';
        params.push(limit);

        const [rows] = await pool.query(query, params);

        let nextCursor = null;
        if (rows.length === limit) { 
            const lastItem = rows[rows.length - 1];
            const cursorData = JSON.stringify({ id: lastItem.id });
            nextCursor = Buffer.from(cursorData).toString('base64');
        }

        res.json({
            success: true,
            data: rows,
            pagination: { 
                limit: limit,
                next_cursor: nextCursor,
                nextPageUrl: nextCursor ? `/api/v1/cursor?cursor=${nextCursor}&limit=${limit}` : null
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};

// 4. Time-Window Pagination
const timeWindowPagination = async (req, res) => {
    try {
        const startDate = req.query.start; 
        const endDate = req.query.end;

        if (!startDate || !endDate) {
            return res.status(400).json({ success: false, error: "Start and End dates are required! Example: ?start=2026-05-01&end=2026-05-31" });
        }

        const query = `
            SELECT id, contest_date, contest_starttime, contest_endtime, status, max_participants 
            FROM 10_4_quiz_contest_master 
            WHERE contest_date >= ? AND contest_date <= ? 
            ORDER BY contest_date ASC
        `;
        
        const [rows] = await pool.query(query, [startDate, endDate]);

        res.json({
            success: true,
            data: rows,
            window: {
                start: startDate,
                end: endDate,
                recordsFound: rows.length
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { 
    offsetPagination, 
    keysetPagination, 
    cursorPagination, 
    timeWindowPagination 
};