const bcrypt = require('bcrypt');
const Client = require('../Models/Client');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


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
