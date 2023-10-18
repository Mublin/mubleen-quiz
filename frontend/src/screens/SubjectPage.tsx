import React, {useState, useContext, useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { ScoreContext } from '../context/useScore';
import axios from 'axios';
import { Question } from '../utils/utils';
import { UserContext } from '../context/useUser';
import CountdownTimer from '../components/Counter';
import Loader from '../components/Loader';

const SubjectPage = () => {
    const { subject } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { nextHandler, startHandler, state, queHandler} = useContext(ScoreContext)
    const { chosenQue } = state
    const {state: userState } = useContext(UserContext)
    const {user} = userState
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    let [questionTracker, setQuestionTracker] = useState(0)
    console.log(state)
    const handleAnswerClick = (value: string) => {
        setSelectedAnswer(value);
    };
    let answer = state.chosenQue.length && state.chosenQue[questionTracker].answerIndex
    useEffect(()=>{
      if (user) {
        const fetchData = async () => {
          const {data} : {
            data : {
            questions: Question[],
            newTime: number,
            targetTime: number
          }
          } = await axios.get(`/api/quiz/${subject}`)
          if (data && data.questions) {
            queHandler(data.questions)
            setIsLoading(false) 
          }
                     
  
        }
        try {
          fetchData()
        } catch (error) {
          alert('invalid subject')
          setIsLoading(false)
          throw Error('invalid subject')
        }
        startHandler()
      }else{
        navigate('/signin')
      }
    },[subject]
    )
  return (
        <div className='subject'>
                {isLoading ? <Loader /> : (
                  <div className="cube1" style={{ width: '80vw' }}>
              <CountdownTimer subject={subject? subject : ''}/>

                  <div className="question">
                    <h3>{chosenQue[questionTracker].questions}</h3>
                  </div>
                  <div className="subject-s">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <button
                        className={`ans ${selectedAnswer == chosenQue[questionTracker].options[0] ? 'selected' : ''}`}
                        onClick={() => handleAnswerClick(chosenQue && chosenQue[questionTracker].options[0])}
                      >
                        {chosenQue && chosenQue[questionTracker].options[0]}
                      </button>
                      <button
                        className={`ans ${selectedAnswer == chosenQue[questionTracker].options[1] ? 'selected' : ''}`}
                        onClick={() => handleAnswerClick(chosenQue && chosenQue[questionTracker].options[1])}
                      >
                        {chosenQue && chosenQue[questionTracker].options[1]}
                      </button>
                      <button
                        className={`ans ${selectedAnswer == chosenQue[questionTracker].options[2] ? 'selected' : ''}`}
                        onClick={() => handleAnswerClick(chosenQue && chosenQue[questionTracker].options[2])}
                      >
                        {chosenQue && chosenQue[questionTracker].options[2]}
                      </button>
                      <button
                        className={`ans ${selectedAnswer == chosenQue[questionTracker].options[3] ? 'selected' : ''}`}
                        onClick={() => handleAnswerClick(chosenQue && chosenQue[questionTracker].options[3])}
                      >
                       {chosenQue && chosenQue[questionTracker].options[3]}
                      </button>
                    </div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button onClick={()=>nextHandler(chosenQue, questionTracker, selectedAnswer, answer, setSelectedAnswer, setQuestionTracker, subject)}>Next</button>
                  </div>
                </div>
                )}
            
          
        </div>
  )
}

export default SubjectPage