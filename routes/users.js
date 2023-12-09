const express = require('express');
const router = express.Router();
const User = require('../models/user');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const {signupUser, loginUser} = require('../controllers/userController')

// router.use(express.json());

// Zakładanie konta usera
router.post('/signup', signupUser);

// logowanie
router.post('/login', loginUser);

module.exports = router;
