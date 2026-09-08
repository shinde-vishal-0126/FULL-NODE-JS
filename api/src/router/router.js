

const express = require('express');
const router = express.Router();
const Player = require('../model/plyer')


// using promise:

// app.post('/player', (req, res) => {
//     const createPlayer = new Player(req.body);
//     console.log(createPlayer);

//     createPlayer.save()
//         .then((data) => {
//             res.status(201).json(data); // Send a JSON response with status 201 for created resource
//         })
//         .catch((e) => {
//             res.status(404).send(e);
//         });
// });


// using async await
router.post("/player", async (req, res) => {
    try {
      const data = req.body;
      const createPlayer = new Player(data);
      const playersData = await createPlayer.save();
      res.status(201).json(playersData);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  router.get("/player", async (req, res) => {
    try {
      const data = await Player.find();
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  router.get("/player/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const singleUser = await Player.findById(_id);
      res.status(200).send(singleUser);
    } catch {
      res.status(500).send(e);
    }
  });

  router.patch("/player/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateUser = await Player.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      res.status(201).send(updateUser);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  router.put("/player/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const bodyData = req.body;
      const updateUser = await Player.findByIdAndUpdate(_id, bodyData, {
        new: true,
      });
      res.status(201).send(updateUser);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  router.delete("/player/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const deletePlayer = await Player.findByIdAndDelete(_id);
      res.status(200).send(deletePlayer);
    } catch (e) {
      res.status(404).send(e);
    }
  });
  

  module.exports = router;