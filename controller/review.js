const model = require('../models/books')

async function addReviewByISBN(req, res){
    const isbn = req.params.isbn
    const data = await model.findById(isbn)
    let reviews = data.reviews
    const review = req.body.review
    reviews.push(review)
    const final = await model.findByIdAndUpdate(isbn, {reviews: reviews})
    res.json({'status': 'Added Review Successfully'})
}

async function deleteReviewByISBN(req, res){
    const isbn = req.params.isbn
    const data = await model.findById(isbn)
    let reviews = data.reviews
    const review = req.body.review

    let index = reviews.indexOf(review)
    reviews.splice(index, 1)
    
    const final = await model.findByIdAndUpdate(isbn, {reviews: reviews})
    res.json({'status': 'Deleted Review Successfully'})
}

module.exports = {
    addReviewByISBN,
    deleteReviewByISBN
}