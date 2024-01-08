const express = require('express')
const router = express.Router()
const model = require('../models/books')
const {addBook, getBooks, getBooksByISBN, getBooksByAuthor, getBooksByTitle, getBookReviewByISBN} = require('../controller/books')

router.route('/addBook').post(addBook)

router.route('/getBooks').get(getBooks)

router.route('/getBooks/:isbn').get(getBooksByISBN)

router.route('/getBooks/author/:author').get(getBooksByAuthor)

router.route('/getBooks/title/:title').get(getBooksByTitle)

router.route('/getBooks/review/:isbn').get(getBookReviewByISBN)

module.exports = router