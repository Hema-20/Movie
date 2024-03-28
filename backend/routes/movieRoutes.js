const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');


// router.get('/', (req, res) => {
//     res.send('Hello, welcome to your server!');
// });


// Create a movie
router.post('/', async (req, res) => {
  try {
    const movie = req.body;
    const db = req.app.locals.db;
    const result = await db.collection('movies').insertOne(movie);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all movies
router.get('/', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const movies = await db.collection('movies').find().toArray();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve a single movie
router.get('/:id', async (req, res) => {
    try {
      const db = req.app.locals.db;
      const movie = await db.collection('movies').findOne({ _id: new ObjectId(req.params.id) });
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Update a movie
// Update a movie
router.put('/:id', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const { id } = req.params;
    const { name, poster, trailer, rating, summary } = req.body;
    const result = await db.collection('movies').updateOne(
      { _id: new ObjectId(id) }, // Correct usage of ObjectId constructor
      { $set: { name, poster, trailer, rating, summary } }
    );
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json({ message: 'Movie updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Delete a movie
// Delete a movie
router.delete('/:id', async (req, res) => {
  try {
    const db = req.app.locals.db;
    const { ObjectId } = require('mongodb'); // Import ObjectId
    const result = await db.collection('movies').deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
