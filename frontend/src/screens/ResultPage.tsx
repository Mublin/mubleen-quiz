import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ScoreContext } from '../context/useScore'
import { UserContext } from '../context/useUser'
import { getError, subjectSelector} from '../utils/utils'
import { toast } from 'react-toastify'
import axios from 'axios'
import Loader from '../components/Loader'


const ResultPage = () => {
    const navigate = useNavigate()
    const { subject } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {state } = useContext(ScoreContext)
    const {state: userState } = useContext(UserContext)
    const {user} = userState
    const { score, correctAnswered, wrongAnswered, selectedQue} = state
    useEffect(()=>{
        const scoreInserter= async (subjec: string, scor: number)=>{
            const subj = subjectSelector(subjec)
            try {
                if (scor && subj && user) {
                  if (scor > user.highScoresubject[subj]) {
                    await axios.put(`http://localhost:2023/api/quiz/${subj}/score`, {
                      score: scor,
                      username: user.username
                    }, {
                      headers:{
                        Authorization: `Bearer ${user.token}`
                      }
                    })
                    setIsLoading(false)
                    toast.success("Congratulations! you have new highscore")
                  }
                }else{
                  setIsLoading(false)
                  navigate('/signin')
                }
            } catch (error) {
              toast.error(getError(error))
              setIsLoading(false)
              return;
            } 
          }
        if (user) {
            scoreInserter(subject || '', score)   
        }else{
        navigate('/subjects')
        }
    },[subject, score, user])
  return (
    <div>
        {isLoading ? <Loader /> : (
          <div>
            <h2>Your Score is <span style={{color: 'red'}}>{score}</span></h2>
        {selectedQue.map((que, i)=>(
            <div key={que.id}>
                <div>
                    <h2>{que.questions}</h2>
                </div>
                <div>
                   
                        <h3>Your answer is <span className={correctAnswered.some(ques => ques.id === que.id)  ? 'green' : 'red'}>{que.options[que.chosen]}</span></h3>
                        {wrongAnswered.some(ques => ques.id === que.id) && <h3>Correct answer is <span className='green'>{que.options[que.answerIndex]}</span></h3>}

                </div>
            </div>
        ))}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem'}}>
            <button onClick={()=> navigate('/subjects')}>Select your next subject</button>
        </div>
          </div>
        ) }
    </div>
  )
}

export default ResultPage