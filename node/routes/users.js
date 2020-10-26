const router = require('express').Router();
let users = require('../models/users.model');
let io = require('../start');

router.route('/login').post((req, res) => {
    let obj = req.body;
 
});

module.exports = router;