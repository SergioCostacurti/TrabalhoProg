const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {type: Number, requiser: true, unique: true},
    username: {type: String, require: true, unique: true},
    weight: {type: Number, require: true},
    password: { type: String, require: true},
    email: {type: String, require: true, unique: true }
});

const User = mongoose.model('User', UserSchema)

module.exports = User;