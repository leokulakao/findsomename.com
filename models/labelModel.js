const mongoose = require('mongoose');

const { Schema } = mongoose;

const labelSchema = new Schema({
    id_user: {
        type: String,
        required: true,
        unique: false
    },
    name: {
        type: String,
        default: '',
        unique: false
    },
    ids: {
        type: Array,
        default: [],
        unique: false
    },
});

// permissions
// '' - user
// 0 - root
// 1 - admin

module.exports = mongoose.model('label', labelSchema);