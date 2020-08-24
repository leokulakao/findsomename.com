const mongoose = require('mongoose');

const { Schema } = mongoose;

const nameRuSchema = new Schema({
    oldId: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    quantityDate: {
        type: String,
        required: false
    },
    hide: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('ru_name', nameRuSchema);
