import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getError } from '../utils/utils'
import { UserContext } from '../context/useUser'
import Loader from '../components/Loader'
type Person = {
    name: string
    username: string
    score: number
}
type Leaders ={
    leaders: Person[]
}
const LeaderBoardScreen = () => {
    const {subject} = useParams()
    const [leaders, setLeaders] = useState<Person[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {state} = useContext(UserContext)
    const {user} = state
    useEffect(()=>{
        const fetchData =async()=>{
            try {
                const {data} : {data : Leaders} = await axios.get(`http://localhost:2023/api/quiz/${subject}/leaderboard`)
                if (data) {
                    setIsLoading(false)
                    setLeaders(data.leaders)
                }else{
                    throw Error("Unable to connect")
                }
            } catch (error) {
                setIsLoading(false)
                toast.error(getError(error))
                throw Error(getError(error))
            }
        }
        fetchData()
    })
  return (
    <div>
        {isLoading ? <Loader /> : (
            <div className="leader">
                <h2>{subject} leaderboard</h2>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Score</th>
                </tr>
            </thead>
            <tbody>
            {leaders.map((leader, i)=>(
                <tr key={i}>
                    <td className={user?.username === leader.username ? "red" : ''}>{leader.name}</td>
                    <td className={user?.username === leader.username ? "red" : ''}>{leader.username}</td>
                    <td className={user?.username === leader.username ? "red" : ''}>{leader.score}</td>
                </tr>
            ))}
            </tbody>
        </table>
            </div>
        )}
        
    </div>
  )
}

export default LeaderBoardScreen