const mongoose = require('mongoose');

const { Schema } = mongoose;

const valueSchema = new Schema({
    id_label: {
        type: String,
        required: true,
        unique: false
    },
    ud_user: {
        type: String,
        required: true,
        unique: false
    },
    name: {
        type: String,
        default: '',
        unique: false
    },
    value: {
        type: Number,
        default: null,
        unique: false
    },
});

module.exports = mongoose.model('value', valueSchema);
