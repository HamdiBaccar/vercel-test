const mongoose = require('mongoose');

const quizzesSchema = mongoose.Schema({
  QuizID: { type: Number, required: true },
  Title: { type: String, required: true },
  Category: { type: String, required: true },
  Difficulty: { type: String, required: true },
  CreatedBy: {
      type: mongoose.Schema.Types.Number,
      ref: 'Admins',
      required: true,
    },
});
const Quizzes = mongoose.model('Quizzes', quizzesSchema);
module.exports = Quizzes;