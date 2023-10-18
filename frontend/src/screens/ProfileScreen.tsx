import React, { ChangeEvent, MouseEvent, useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/useUser'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { getError } from '../utils/utils'
import Loader from '../components/Loader'

const ProfileScreen = () => {
  const {state} = useContext(UserContext)
  const {user} = state
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const submitHandler =async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (name !== user?.name || email !== user.email) {
        await axios.put(`/api/users/change`, {
          name,
          email,
          username: user?.username
        }, {
          headers: {
            Authorization: `Bearer ${user?.token}`
          }
        })
        toast.success('Details updated successfully')
      }
    } catch (error) {
      toast.error(getError(error))
      throw Error(getError(error))
    }
  }
  useEffect(()=>{
    if (!user) {
      navigate('/signin')
    }
    const fetchData =async () => {
      try {
        const {data}: {data: {
          name: string
          email: string
          username: string
        }} = await axios.get(`/api/users/${user?.username}`, {
          headers: {
            Authorization: `BEARER ${user?.token}`
          }
        })
        if (data) {
          setName(data.name)
          setEmail(data.email)
          setUsername(data.username)
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        toast.error(getError(error))
        throw Error(getError(error))
      }  
    }
    fetchData()
  },[])
  return (
    <div className="subject">
        <div>
            <div>
            <h2>User Profile</h2>

            </div>
              
            <div>
              {loading ? <h2><Loader /></h2> : user &&
              <div>
                <form onSubmit={submitHandler}>
                  <label htmlFor="">
                     Name: <input type="text" value={name} required onChange={(e: ChangeEvent<HTMLInputElement>)=>{ setName(e.target.value)}}/>
                  </label>
                  <label htmlFor="">
                    Username: <input type="text" disabled value={username} style={{color: 'black'}}/>
                  </label>
                  <label htmlFor="">
                    E-mail: <input type="text" value={email} required onChange={(e: ChangeEvent<HTMLInputElement>)=>{ setEmail(e.target.value)}}/>
                  </label>
                  <label htmlFor="">
                    <button style={{width: '90%'}} onClick={()=>{navigate('/changepassword')}}>Change password</button>
                  </label>
                  <label htmlFor="">
                  <button type='submit'>Change details</button>
                  </label>
                  
                </form>
              </div>}
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen;