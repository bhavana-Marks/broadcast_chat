const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose');
const router = express.Router();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
module.exports = io;

const PORT = 4000;
// let users = require('./models/users.model');

app.use(cors({ origin :'http://localhost:3000'}));
app.use(bodyParser.json());

// mongoose.connect('mongodb://127.0.0.1:27017/chatVenue', { useNewUrlParser: true });

// const connection = mongoose.connection;
// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

// socket IO
io.on('connection', function(socket) {
    console.log('socket connection +++++++++++++++++++++')
})

app.use('/api', router);
const usersRouter = require('./routes/users');
const conversationRouter = require('./routes/conversation');

app.use('/users', usersRouter);
app.use('/conversation', conversationRouter);
