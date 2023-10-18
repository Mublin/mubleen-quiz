const express = require('express')
const knex = require('knex')
const bcrypt = require('bcryptjs')
const { generateToken, isAuth } = require('../utils')
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.db_url,
        user: process.env.db_username,
        password: process.env.db_password,
        database: process.env.db_name
    }
})

const userRoute = express.Router()




userRoute.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userQuery = db('users').select('username').where('username', '=', username);
        const user = await userQuery;

        if (user.length) {
            const credentials = await db('hash').select('password').where('username', '=', username);
            if (credentials.length) {
                const correct = await bcrypt.compare(password, credentials[0].password);

                if (correct) {
                    const scoreDetails = await db('highscore').select('*').where('username', '=', username).first();

                    // Handle the successful response here
                    return res.status(200).send({
                        username: user[0].username,
                        token: generateToken({
                            username: user[0].username,
                            email: user[0].email,
                            name: user[0].name,
                            highScoreSubject: {
                                eng: scoreDetails.eng,
                                maths: scoreDetails.maths,
                                chemistry: scoreDetails.chemistry,
                                physics: scoreDetails.physics,
                                biology: scoreDetails.biology,
                            }
                        }), // Provide a valid token
                        email: user[0].email,
                        name: user[0].name,
                        highScoreSubject: {
                            eng: scoreDetails.eng,
                            maths: scoreDetails.maths,
                            chemistry: scoreDetails.chemistry,
                            physics: scoreDetails.physics,
                            biology: scoreDetails.biology,
                        }
                    });
                } else {
                    return res.status(401).send({ message: 'Invalid password' });
                }
            } else {
                return res.status(401).send({ message: 'Invalid password' });
            }
        } else {
            return res.status(401).send({ message: 'Invalid user' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
});


userRoute.post('/register', async (req, res) => {
    const { username, password, email, name } = req.body;
    try {
        // Check if the username or email already exists
        const user = await db('users').select('username').where('username', '=', username);
        const userEmail = await db('users').select('username').where('email', '=',  email);
        if (user[0] || userEmail[0]) {
            return res.status(400).send({ message: 'Username or email already exists' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10); // Adjust the salt rounds as needed

        // Use a transaction to ensure data consistency
        await db.transaction(async (trx) => {
            const newUser = {
                name,
                email,
                username,
            };

            // Insert user data into the 'users' table
            const userId = await trx('users').insert(newUser);

            // Insert hashed password into the 'hash' table
            const hashData = {
                username,
                password: hashedPassword, // Store the hashed password
            };
            await trx('hash').insert(hashData);

            // Insert initial highscore data into the 'highscore' table
            const highscoreData = {
                username,
                eng: 0,
                maths: 0,
                chemistry: 0,
                physics: 0,
                biology: 0,
            };
            await trx('highscore').insert(highscoreData);
        });

        // Registration successful, send a response
        return res.status(201).send({
            email,
            username,
            name,
            highScoreSubject: {
                eng: 0,
                maths: 0,
                chemistry: 0,
                physics: 0,
                biology: 0
            },
            token: generateToken({username, email, name, highScoreSubject: {
                eng: 0,
                maths: 0,
                chemistry: 0,
                physics: 0,
                biology: 0
            }}), // Provide a token if needed
        });
    } catch (error) {
        // Handle errors and send an appropriate response
        console.error(error);
        return res.status(500).send({ message: 'Internal server error' });
    }
});
userRoute.get("/:username", isAuth, async (req, res)=>{
    const {username} = req.params
    try {
        const userQuery = db('users').select('name', 'username', 'email').where('username', '=', username)
        const user =await userQuery
        if (user.length) {
            return res.status(200).send(user[0])
        }else{
            return res.status(401).send({message: 'user not found'})
        }
    } catch (error) {
        console.log(error)
        return res.status(501).send({message: 'Internal Server Error'})
    }
})
userRoute.put('/changepassword', isAuth, async (req, res)=>{
    const {password, nPassword} = req.body;
    const { username } = req.user
    if (password !== nPassword) {
        await db.select('*').from('hash').where('username', '=', username)
        .then( async (resp)=>{
            const correct = await bcrypt.compare(password, resp[0].password)
            if (correct) {
                
            } else {
                throw Error('incorrect password')
            }
        }).then(async (response)=>{
            const newpassword ={
                password: bcrypt.hashSync(nPassword, 10)
            }
            console.log(newpassword)
                await db('hash').where('username', '=', username).update(newpassword)
                return res.status(200).send({message: 'updated successfully'})
        })
        .catch((error)=>{
            console.error(error)
            return res.status(501).send({message : 'invalid details'})
        })
    } else {
        return res.status(401).send({message: "change new password"})
    }

})
userRoute.put("/change", isAuth, async (req, res)=>{
    const {username, email, name} = req.body
    try {
        const userQuery = db('users').select('name', 'username', 'email').where('username', '=', username)
        const user =await userQuery
        if (user.length) {
            const updatedata = {
                email,
                name
            }
            await db('users').where('username', '=', username).update(updatedata)
            return res.status(201).send({message: "Updated successfully"})
        }else{
            return res.status(401).send({message: 'user not found'})
        }
    } catch (error) {
        console.log(error)
        return res.status(501).send({message: 'Internal Server Error'})
    }
})
module.exports = userRoute;