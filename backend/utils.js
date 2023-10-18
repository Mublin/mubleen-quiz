const { mathQuestions, englishQuestions, physicsQuestions, biologyQuestions, chemistryQuestions } = require("./data/data");
const jwt = require('jsonwebtoken')
const generateToken = (user) =>{
    return jwt.sign({
        name: user.name,
        email: user.email,
        username: user.username,
        highScoreSubject: user.highScoreSubject
    }, process.env.JWTSECRET, {
        expiresIn: '7d'
    })
}
const isAuth =(req,res, next) => {
    const authorization = req.headers.authorization
    if (authorization){
        const token = authorization.slice(7, authorization.length)
        jwt.verify(token, process.env.JWTSECRET, (err, decode)=>{
            if (err) {
                return res.status(401).send({message: "Invalid token"})
            }else{
                req.user = decode
                next()
            }
        })
    }else{
        return res.status(401).send({message : "No token found"})
    }
}

const questionSubject = (subject) =>{
    return subject === 'maths'
      ? mathQuestions
      : subject === 'eng-lang'
      ? englishQuestions
      : subject === 'physics'
      ? physicsQuestions
      : subject === 'biology'
      ? biologyQuestions
      : subject === 'chemistry'
      ? chemistryQuestions
      : [];}

module.exports={
    questionSubject,
    generateToken,
    isAuth
}