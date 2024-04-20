const express = require("express");
const router = express.Router();
const getUsers = require('../controllers/getUsers')

router.get('/', getUsers.getAllUsers)

module.exports = router;
