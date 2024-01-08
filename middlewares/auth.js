const {getUser} = require('../service/auth')


async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.headers.uid

    if(!userUid){
        return res.send({'status':'You are not logged in'})
    }

    const user = getUser(userUid)

    if(!user){
        return res.send({'status':'You are not logged in'})
    }

    req.user = user
    next();
}

module.exports = {
    restrictToLoggedinUserOnly
}