const express = require('express');
const router = express.Router();
const quizResultsController = require('../controllers/quizResultsController');

router.post('/', quizResultsController.createQuizResult);

router.get('/:ResultID', quizResultsController.getQuizResult);

router.put('/:ResultID', quizResultsController.updateQuizResult);

router.delete('/:ResultID', quizResultsController.deleteQuizResult);

module.exports = router;
