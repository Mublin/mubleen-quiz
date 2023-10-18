import { ChangeEvent, useContext, useState, MouseEvent, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/useUser'
import { toast } from 'react-toastify'
import { getError } from '../utils/utils'

const RegisterScreen = () => {
    const { registerHandler, state } = useContext(UserContext)
    const {user} = state
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [cPassword, setCPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const submitHandler = async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await registerHandler(name, username, email, password, cPassword)    
        } catch (error : any) {
            toast.error(getError(error))
            throw Error(getError(error))
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
                Name: <input value={name} type="text" required placeholder='e.g Capt Jazz' onChange={
                    (e : ChangeEvent<HTMLInputElement>)=>{
                        setName(e.target.value)
                }} />
            </label>
            <label htmlFor="">
                Username: <input value={username} type="text" required placeholder='e.g quiz45' onChange={
                    (e : ChangeEvent<HTMLInputElement>)=>{
                        setUsername(e.target.value)
                }} />
            </label>
            <label htmlFor="">
                Email: <input value={email} type="email" required placeholder='e.g a@email.com' onChange={
                    (e : ChangeEvent<HTMLInputElement>)=>{
                        setEmail(e.target.value)
                }} />
            </label>
            <label htmlFor="">
                Password: <input value={password} type="password" required placeholder="e.g mother's first name" onChange={
                    (e : ChangeEvent<HTMLInputElement>)=>{
                        setPassword(e.target.value)
                }} />
            </label>
            <label htmlFor="">
                Confirm Password: <input value={cPassword} type="password" required placeholder="e.g write your password again" onChange={
                    (e : ChangeEvent<HTMLInputElement>)=>{
                        setCPassword(e.target.value)
                }} />
            </label>
            <label htmlFor="">
            <button type='submit'>Sign-Up</button>
            <h2>Already a user? <Link to={'/signin'} style={{color: 'blue'}}>Sign-Up</Link></h2>
            </label>
            
        </form>
    </div>
  )
}

export default RegisterScreen;