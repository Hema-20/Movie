const express = require('express');


const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection URI
const uri = 'mongodb+srv://hemalatha20j:stFrORAPQLORAKq7@cluster0.fb2pl.mongodb.net/';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    const db = client.db('MovieRating'); // Specify your database name here
    app.locals.db = db;
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
