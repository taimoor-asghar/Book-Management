const express = require('express')
const {connectDB} = require('./database')
const router = require('./routes/books')
const userRouter = require('./routes/user')
const reviewRouter = require('./routes/review')
const {restrictToLoggedinUserOnly} = require('./middlewares/auth')

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: false}))

connectDB('mongodb://localhost:27017/booksDB')

app.use('/bookManagement', router)
app.use('/userManagement', userRouter)

app.use('/review', reviewRouter)







app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT}`)
})