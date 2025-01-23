const mongoose = require('mongoose')

const newBookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },

}, {timestamps: true})


module.exports = mongoose.model('Book', newBookSchema)