const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/', questionController.createQuestion);

router.get('/:QuestionID', questionController.getQuestion);

router.put('/:QuestionID', questionController.updateQuestion);

router.delete('/:QuestionID', questionController.deleteQuestion);

module.exports = router;
