const model = require('../models/books')

async function addBook(req, res){
    await model.create({
        author:req.body.author,
        title:req.body.title,
        reviews: []
    }).catch((err)=>{
        return console.log('Error '+err)
    })
    res.json({'status': 'added'})
}

async function getBooks(req, res){
    const data = await model.find({})
    res.json(data)
}

async function getBooksByISBN(req, res){
    const data = await model.findById(req.params.isbn)
    res.json(data)
}

async function getBooksByAuthor(req, res){
    const author = req.params.author
    const data = await model.find({author:author})
    res.json(data)
}

async function getBooksByTitle(req, res){
    const title = req.params.title
    const data = await model.find({title:title})
    res.json(data)
}

async function getBookReviewByISBN(req, res){
    const isbn = req.params.isbn
    const data = await model.findById(isbn)
    const review = data.reviews
    res.json(review)
}

module.exports = {
    addBook,
    getBooks,
    getBooksByISBN,
    getBooksByAuthor,
    getBooksByTitle,
    getBookReviewByISBN
}