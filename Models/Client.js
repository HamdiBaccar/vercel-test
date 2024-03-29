const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  ClientID: { type: Number, unique: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Profession :{ type: String, required: true },
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;