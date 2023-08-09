const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const adminRoutes = require('./routes/adminRoutes');
const badgeRoutes = require('./routes/badgeRoutes');
const clientRoutes = require('./routes/clientRoutes');
const quizRoutes = require('./routes/quizzesRoutes');
const questionRoutes = require('./routes/questionsRoutes');
const quizResultsRoutes = require('./routes/quizResultsRoutes');
const clientBadgesRoutes = require('./routes/clientbdgRoutes');

app.use('/api/Questions', questionRoutes);
app.use('/api/Badges', badgeRoutes);
app.use('/api/Quizzes', quizRoutes);
app.use('/api/Admins', adminRoutes);
app.use('/api/Clients', clientRoutes);
app.use('/api/QuizzResults', quizResultsRoutes);
app.use('/api/ClientBadges', clientBadgesRoutes);

app.listen(port||process.env.PORT, () => {
  console.log('Server is running.....');
});
