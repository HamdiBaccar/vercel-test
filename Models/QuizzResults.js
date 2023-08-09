const mongoose = require('mongoose');

const QResSchema = mongoose.Schema({
  ResultID: { type: Number, required: true },
  ClientID: {
      type: mongoose.Schema.Types.Number,
      ref: 'Client',
      required: true,
    },
  QuizID: { type: Number, required: true },
  Score: { type: Number, required: true },
  SubmittedAt: { type: Date, required: true },
});
const QuizzResults = mongoose.model('QuizzResults', QResSchema);
module.exports = QuizzResults;