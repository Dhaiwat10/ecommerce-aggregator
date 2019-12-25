const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    building: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('address', addressSchema)