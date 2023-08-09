const mongoose = require('mongoose');

const client_badgesSchema = mongoose.Schema({
  UserBadgeID: { type: Number, required: true },
  UserID: {
      type: mongoose.Schema.Types.Number,
      ref: 'Client',
      required: true,
    },
  BadgeID: {
                 type: mongoose.Schema.Types.Number,
                 ref: 'Badges',
                 required: true,
               },
  AchievedAt: { type: Date, required: true },
});
const ClientBadges = mongoose.model('ClientBadges', client_badgesSchema);
module.exports = ClientBadges;