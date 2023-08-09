const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/', quizController.createQuiz);

router.get('/:QuizID', quizController.getQuiz);

router.put('/:QuizID', quizController.updateQuiz);

router.delete('/:QuizID', quizController.deleteQuiz);

module.exports = router;
