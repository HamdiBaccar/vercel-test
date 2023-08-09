const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  ClientID: { type: Number, required: true, unique: true },
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Profession :{ type: String, required: true },
  Phone_Number: { type: Number, required: true, unique: true },
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;