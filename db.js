const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bcrhamdi:w945fLHLUdRXNYzg@cluster0.c4oiewx.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database.');
});
module.exports = db;


