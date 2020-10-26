
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let msgs = new Schema({
    senderId: {type: String},  // or user Id
    receipentId: {type: String},
    message: {type: String},
    dateTime:{type: Date}
})
let Messages = new Schema({
    _id: {type: Schema.ObjectId},
    conversations:[msgs],
});

module.exports = conversations = mongoose.model("conversation", Messages);
