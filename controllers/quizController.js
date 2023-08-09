const Quizzes = require('../Models/Quizzes');

// POST
exports.createQuiz = async (req, res) => {
  try {
    const quiz = new Quizzes(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Could not create quiz.' });
  }
};

// GET
exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quizzes.findOne({ QuizID: req.params.QuizID }).populate('CreatedBy', 'Username');
    if (quiz) {
      res.json(quiz);
    } else {
      res.status(404).json({ error: 'Quiz not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving quiz.' });
  }
};

// UPDATE
exports.updateQuiz = async (req, res) => {
  try {
    const quizID = req.params.QuizID;
    const updatedQuiz = await Quizzes.findOneAndUpdate(
      { QuizID: quizID },
      req.body,
      { new: true }
    );
    if (updatedQuiz) {
      res.json(updatedQuiz);
    } else {
      res.status(404).json({ error: 'Quiz not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating quiz.' });
  }
};

// DELETE
exports.deleteQuiz = async (req, res) => {
  try {
    const quizID = req.params.QuizID;
    const deletedQuiz = await Quizzes.findOneAndDelete({ QuizID: quizID });
    if (deletedQuiz) {
      res.json({ message: 'Quiz deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Quiz not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting quiz.' });
  }
};
