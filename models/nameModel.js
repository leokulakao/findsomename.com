const mongoose = require('mongoose');

const { Schema } = mongoose;

const nameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('names', nameSchema);
