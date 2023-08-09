const mongoose = require('mongoose');

const badgesSchema = mongoose.Schema({
  BadgeID: { type: Number, required: true },
  BadgeName: {type:String,required: true},
  Description: { type:String, required: true },
  Image: { type:String, required: true },
});const Badges = mongoose.model('Badges', badgesSchema);
   module.exports = Badges;