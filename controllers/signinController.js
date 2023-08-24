const bcrypt = require('bcrypt');
const Client = require('../Models/Client');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


//generating key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};


//sign-in
exports.login = async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await Client.findOne({ Email: Email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const validPassword = await bcrypt.compare(Password, user.Password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

    const secretKey = generateSecretKey();
       const token = jwt.sign({ Email: user.Email }, secretKey, { expiresIn: '1h' });
       res.json({ token });
     } catch (error) {
       res.status(500).json({ error: 'An error occurred' });
     }
   };
