const mongoose = require('mongoose');

const QuesSchema = mongoose.Schema({
  QuestionID: { type: Number, required: true },
  QuizID: {
                type: mongoose.Schema.Types.Number,
                  ref: 'Quizzes',
                  required: true
                  },
  QuestionText: { type: String, required: true },
  CorrectAnswer: { type: String, required: true },
});
const Questions = mongoose.model('Questions', QuesSchema);
module.exports = Questions;