const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        default: '',
    },
    permission: {
        type: String,
        default: 'user'
    }
});

// permissions
// '' - user
// 0 - root
// 1 - admin

module.exports = mongoose.model('users', userSchema);
