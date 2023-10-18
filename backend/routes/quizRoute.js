const express = require('express')
const { questionSubject, isAuth } = require('../utils')
const knex = require('knex')
const userRoute = require('./userRoutes')
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '307048',
        database: 'quizapp'
    }
})

const quizRoute = express.Router()



quizRoute.get('/:subject', isAuth, (req, res)=>{
    const {subject} = req.params
    const questions = questionSubject(subject)
    const questionIndex = Number((Math.random() * 10).toFixed(0))
    const newTime = new Date().getTime()
    const targetTime = newTime + 10 * 60 * 1000
    if (targetTime <= newTime) {
        return res.status(201).send({message: 'Time Up'})
    }
    if (questions.length) {
        return res.status(201).send({
            questions: questions.slice(questionIndex, questionIndex + 10), 
            newTime,
            targetTime,
            subject
        })
    }
    return res.status(401).send({message: `Invalid subject ${subject}`})
})
quizRoute.get('/:subject/leaderboard', async (req, res) =>{
    const {subject} = req.params
    db.select('users.username', 'users.name', 'highscore.' + subject + ' as score').from('highscore')
    .leftJoin('users', 'highscore.username', 'users.username')
    .orderBy('score', 'desc')
    .then((leaders)=>{
        return res.status(200).send({leaders})
    })
    .catch((error)=>{
        console.log(error)
        return res.status(500).send({message: "server error"})
    })
})
quizRoute.get('/:subject/result', isAuth, (req, res)=>{
    const {subject} = req.params
    const questions = questionSubject(subject)
    const questionIndex = Number((Math.random() * 10).toFixed(0))
    const newTime = new Date().getTime()
    const targetTime = newTime + 10 * 60 * 1000
    if (targetTime <= newTime) {
        return res.status(201).send({message: 'Time Up'})
    }
    if (questions.length) {
        return res.status(201).send({
            questions: questions.slice(questionIndex, questionIndex + 10), 
            newTime,
            targetTime,
            subject
        })
    }
    return res.status(401).send({message: `Invalid subject ${subject}`})
})
quizRoute.get('/:subject/score', isAuth, async (req, res) => {
    const { username} = req.query
    const {subject} = req.params
    try {
        const subjectScore = await db('highscore').select(subject).where('username', '=', username)
        if (subjectScore.length) {
            return res.status(201).send({score: subjectScore[0][subject]})
        }else {
            throw Error("Error")
        }
    }catch(err){
        return res.status(500).send({message : "Server error"})
    }
})

quizRoute.put('/:subject/score', isAuth, async (req, res) => {
    const { score, username } = req.body;
    const { subject } = req.params;
    try {
        

        // Use async/await when querying the database, and make sure to handle errors properly.
        const subjectScore = await db('highscore').select(subject).where('username', '=', username);

        if (subjectScore.length > 0) {
            const currentScore = subjectScore[0][subject];

            // Check if the new score is higher than the current score.
            if (score > currentScore) {
                // Use "update" to update the existing record instead of "insert."
                await db('highscore').where('username', '=', username).update({ [subject]: score });

                return res.status(200).send({ message: "Congratulations" });
            } else {
                return res.status(200).send({ message: "Try harder next time" });
            }
        } else {
            return res.status(500).send({ message: "Server Error" });
        }
    } catch (error) {
        console.error(error);

        // Return an appropriate status code for the error condition (e.g., 500 for a server error).
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = quizRoute