import axios from 'axios'
import React, { useState, MouseEvent, useContext, useEffect, ChangeEvent } from 'react'
import { toast } from 'react-toastify'
import { getError } from '../utils/utils'
import { UserContext } from '../context/useUser'
import { useNavigate } from 'react-router-dom'

const PasswordChange = () => {
    const {state} = useContext(UserContext)
    const {user} = state
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [nPassword, setNPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const submitHandler =async (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const {data} : {
                data: {
                    message: string
                }
            } = await axios.put(`http://localhost:2023/api/users/changepassword`, {
                password,
                nPassword
            }, {
                headers: {
                    Authorization: `Bearer ${user?.token}`
                }
            })
            if (data){
                toast.success('password changed successfully')
                return;
            }
        } catch (error) {
            toast.error(getError(error));
            throw Error(getError(error))
        }
    }
    useEffect(()=>{
        if (!user){
            navigate('/signin')
        }
    },[])
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="">
                Old password:<input type="password" value={password} required onChange={(e: ChangeEvent<HTMLInputElement>)=>{ setPassword(e.target.value)}}/>
            </label>
            <label htmlFor="">
                New password:<input type="password" name="new-password" value={nPassword} id="" required onChange={(e: ChangeEvent<HTMLInputElement>)=>{ setNPassword(e.target.value)}}
                />
            </label>
            <label htmlFor="">
                Confirm password:<input type="password" name="confirm-password" value={cPassword} id="" required onChange={(e: ChangeEvent<HTMLInputElement>)=>{ setCPassword(e.target.value)}} />
            </label>
            <label htmlFor="">
                <button type="submit" style={{width: '100%'}}>Change password</button>
            </label>
        </form>
    </div>
  )
}

export default PasswordChange