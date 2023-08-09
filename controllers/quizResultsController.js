const QuizzResults = require('../Models/QuizzResults');

// POST
exports.createQuizResult = async (req, res) => {
  try {
    const quizResult = new QuizzResults(req.body);
    await quizResult.save();
    res.status(201).json(quizResult);
  } catch (error) {
    res.status(500).json({ error: 'Could not create quiz result.' });
  }
};

// GET
exports.getQuizResult = async (req, res) => {
  try {
    const quizResult = await QuizzResults.findOne({ ResultID: req.params.ResultID })
      .populate('clientID', 'Username')
      .populate('QuizID', 'Title');
    if (quizResult) {
      res.json(quizResult);
    } else {
      res.status(404).json({ error: 'Quiz result not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving quiz result.' });
  }
};

// UPDATE
exports.updateQuizResult = async (req, res) => {
  try {
    const resultID = req.params.ResultID;
    const updatedQuizResult = await QuizzResults.findOneAndUpdate(
      { ResultID: resultID },
      req.body,
      { new: true }
    );
    if (updatedQuizResult) {
      res.json(updatedQuizResult);
    } else {
      res.status(404).json({ error: 'Quiz result not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating quiz result.' });
  }
};

// DELETE
exports.deleteQuizResult = async (req, res) => {
  try {
    const resultID = req.params.ResultID;
    const deletedQuizResult = await QuizzResults.findOneAndDelete({ ResultID: resultID });
    if (deletedQuizResult) {
      res.json({ message: 'Quiz result deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Quiz result not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting quiz result.' });
  }
};
