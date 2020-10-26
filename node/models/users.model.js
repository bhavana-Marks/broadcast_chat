const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// let Friends = new Schema({
//     // userName: {type: String, index: { unique: true }}
//     userName: {type: String}
// })

let Users = new Schema({
    _id:{type: String},
    userName: {type: String},
    // password: {type: String},
    // friends: [Friends]
});
module.exports = mongoose.model('users', Users);