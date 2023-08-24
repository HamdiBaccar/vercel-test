const bcrypt = require('bcrypt');
const Client = require('../Models/Client');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


//sign-up
exports.signup = async (req, res) => {
  const { FirstName,LastName, Email,Profession,Password } = req.body;

  try {
  console.log('signup function called');
  console.log('Received data:',req.body);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
    console.log('Hashed Password:', hashedPassword);
    const newUser = new Client({
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Profession: Profession,
      Password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
  console.log('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
