import React, { ChangeEvent, MouseEvent, useContext, useEffect, useState } from 'react'
import { ScoreContext } from '../context/useScore'
import { Link, useNavigate } from 'react-router-dom'
import { REDUCER_ACTION_TYPE, UserContext } from '../context/useUser'
import { toast } from 'react-toastify'
import { User, getError } from '../utils/utils'
import axios from 'axios'

const SignInScreen = () => {
    const { state, ctxDispatch: dispatch } = useContext(UserContext)
    const {user} =state
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const submitHandler = async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault()


        const signInHandler = async (username: string, password : string): Promise<void> =>{
            const {data} : {data : {
                    name: string,
                    email: string
                    username: string;
                    token: string;
                    highScoreSubject: {
                        eng: number;
                        maths: number;
                        chemistry: number;
                        physics: number;
                        biology: number;
                    }
            }} = await axios.post(`/api/users/signin`, {
            password,
            username
        })
        console.log(data)
        if (data) {
            dispatch({
                type: REDUCER_ACTION_TYPE.signin,
                payload: {
                    email: data.email,
                    name: data.name,
                    username: data.username,
                    token: data.token,
                    highScoresubject: data.highScoreSubject
                }
            })
            localStorage.setItem('userInfo', JSON.stringify({
                email: data.email,
                name: data.name,
                username: data.username,
                token: data.token,
                highScoresubject: data.highScoreSubject
            }))
            toast.success("welcome back!")
            navigate('/subjects')
        }
    }


        try {
            await signInHandler(username, password)
        } catch (error) {
            // console.log(error)
            toast.error(getError(error))     
        }
    
        
        
    }
    useEffect(()=>{
        if (user) {
           navigate('/') 
        }
    },[user])
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="">
                Username: <input value={username} required placeholder='e.g quiz45' type="text" onChange={
                    (e : ChangeEvent<HTMLInputElement>)=>{
                        setUsername(e.target.value)
                }} />
            </label>
            <label htmlFor="">
                Password: <input value={password} type="password" required placeholder='e.g name of your first pet' onChange={
                    (e : ChangeEvent<HTMLInputElement>)=>{
                        setPassword(e.target.value)
                }} />
            </label>
            <button type='submit'>Sign-In</button>
            <h2>New user? <Link to={'/register'}>register</Link></h2>
        </form>
    </div>
  )
}

export default SignInScreen