const express = require('express')
const router = express.Router()
const {addReviewByISBN, deleteReviewByISBN} = require('../controller/review')


router.route('/setReview/:isbn').post(addReviewByISBN)

router.route('/deleteReview/:isbn').post(deleteReviewByISBN)

module.exports = router
