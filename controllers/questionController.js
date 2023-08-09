const Questions = require('../Models/Questions');

//POST
exports.createQuestion = async (req, res) => {
  try {
    const question = new Questions(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: 'Could not create question.' });
  }
};

//GET
exports.getQuestion = async (req, res) => {
  try {
    const question = await Questions.findOne({ QuestionID: req.params.QuestionID });
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ error: 'Question not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving question.' });
  }
};

// UPDATE
exports.updateQuestion = async (req, res) => {
  try {
    const questionID = req.params.QuestionID;
    const updatedQuestion = await Questions.findOneAndUpdate(
      { QuestionID: questionID },
      req.body,
      { new: true }
    );
    if (updatedQuestion) {
      res.json(updatedQuestion);
    } else {
      res.status(404).json({ error: 'Question not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating question.' });
  }
};

// DELETE
exports.deleteQuestion = async (req, res) => {
  try {
    const questionID = req.params.QuestionID;
    const deletedQuestion = await Questions.findOneAndDelete({ QuestionID: questionID });
    if (deletedQuestion) {
      res.json({ message: 'Question deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Question not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting question.' });
  }
};
