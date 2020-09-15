const mongoose = require('mongoose');

const { Schema } = mongoose;

const linkSchema = new Schema({
    id_label: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        required: true,
        unique: false
    },
    date_from: {
        type: Date,
        default: new Date(),
        unique: false
    },
    date_to: {
        type: Date,
        default: null,
        unique: false
    },
    message: {
        type: String,
        default: '',
        unique: false
    }
});

module.exports = mongoose.model('link', linkSchema);
