const bcrypt = require('bcrypt');
const Client = require('../Models/Client');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

//generating key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};


//sign-up
exports.signup = async (req, res) => {
  const { firstname,lastname, email,profession,password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new Client({
      FirstName: firstname,
      LastName: lastname,
      Email: email,
      Profession: profession,
      PasswordHash: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

//sign-in
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Client.findOne({ Username: username });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const validPassword = await bcrypt.compare(password, user.PasswordHash);
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

    const secretKey = generateSecretKey();
       const token = jwt.sign({ username: user.Username }, secretKey, { expiresIn: '1h' });
       res.json({ token });
     } catch (error) {
       res.status(500).json({ error: 'An error occurred' });
     }
   };