const User = require('../models/users')
const {v4: uuidv4} = require('uuid')
const {setUser} = require('../service/auth')

async function userSignup(req, res){
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    await User.create({
        name: name,
        email: email,
        password: password
    })

    return res.json({'Status': 'User Successfully created, you can login'})
}

async function userLogin(req, res){
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({email:email, password:password})

    if(!user){
        return res.json({"status": "User not found or maybe email or password is incorrect"})
    }
    
    const sessionId = uuidv4()
    setUser(sessionId, user)
    res.setHeader('uid', sessionId)
    return res.json({'status': 'Logged in successfully'})
}

module.exports = {
    userSignup,
    userLogin
}