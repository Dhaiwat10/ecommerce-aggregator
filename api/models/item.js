const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sellerEmail: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('item', itemSchema)