const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: Number,
        required: true,
    },
    confirmed: {
        type: Number,
        required: true,
    },
    user_History: [{
        name: String,
        result: String,
        level: String,
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;