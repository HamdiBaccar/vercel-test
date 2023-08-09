const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
  AdminID: { type: Number, required: true },
  Username: {type: String,required: true},
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Profession :{ type: String, required: true },
  Phone_Number: { type: Number, required: true, unique: true },
});
const Admins = mongoose.model('Admins', AdminSchema);
module.exports = Admins;