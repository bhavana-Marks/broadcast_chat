const converSationRouter = require('express').Router();
let conversationsModel = require('../models/conversation.model');
var mongoose = require('mongoose');
var io = require('../start');

converSationRouter.route('/send').post(async (req, res) => {
    sm = req.body;
    response.setHeader("Access-Control-Allow-Credentials", "true");
    io.emit('messageStored', sm);
    
})

module.exports = converSationRouter;