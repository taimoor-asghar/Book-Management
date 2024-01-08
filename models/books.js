const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    author:{
        type:String
    },

    title:{
        type:String,
        unique: true
    },

    reviews:[]
})

const books = mongoose.model('manageBooks', booksSchema)

module.exports = books