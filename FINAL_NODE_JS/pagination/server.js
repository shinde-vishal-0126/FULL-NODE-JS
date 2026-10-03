

const express = require('express');
const paginationRoute = require('./src/routes/paginationRoute')

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/api/v1', paginationRoute)




app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
})