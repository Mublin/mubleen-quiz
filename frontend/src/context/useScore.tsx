import React, { ReactElement, createContext, useReducer } from "react"
import { Question, wrongAnswerType } from '../utils/utils';
import { useNavigate } from "react-router-dom"

type StateType = {
    score: number
    chosenQue: Question[]
    selectedQue: wrongAnswerType[]
    correctAnswered: Question[]
    wrongAnswered: Question[]
}
const enum REDUCER_ACTION_TYPE{
    que,
    correct,
    wrong,
    reset,
    selected,
}
export const initState : StateType = {
    score: 0,
    correctAnswered: [],
    wrongAnswered: [],
    chosenQue: [],
    selectedQue: [],
}
type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload: Question[] | StateType | wrongAnswerType[]
}

const reducer = (state: StateType, action: ReducerAction): StateType =>{
    switch (action.type) {
        case REDUCER_ACTION_TYPE.que:
            return {...state, chosenQue: action.payload as Question[]};
        case REDUCER_ACTION_TYPE.selected:
            return {...state, selectedQue: action.payload as wrongAnswerType[]};
        case REDUCER_ACTION_TYPE.correct:
            return {...state, score: state.score + 1, correctAnswered: action.payload as Question[]};
        case REDUCER_ACTION_TYPE.wrong:
            return {...state, wrongAnswered: action.payload as Question[]}
        case REDUCER_ACTION_TYPE.reset:
            return action.payload as StateType
        default:
            return state
    }
}

const useScoreContext = (initialState : StateType) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const navigate = useNavigate()



    const nextHandler = ( questionTracker: number, selectedAnswer: string | null, 
        answer: number, setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>, setQuestionTracker : React.Dispatch<React.SetStateAction<number>>, subject: any) : void =>{
        const getChosenIndex = (answerSelected: any): number => {
            const ans = state.chosenQue[questionTracker].options.find(x=> x == answerSelected) ? state.chosenQue[questionTracker].options.indexOf(answerSelected) : -1
                return ans
        }


        dispatch({
            type: REDUCER_ACTION_TYPE.selected,
            payload: [...state.selectedQue, {
                answerIndex: state.chosenQue[questionTracker].answerIndex,
                id: state.chosenQue[questionTracker].id,
                options: state.chosenQue[questionTracker].options,
                questions: state.chosenQue[questionTracker].questions,
                chosen: getChosenIndex(selectedAnswer),
            }]
        })


        if (selectedAnswer && selectedAnswer == state.chosenQue[questionTracker].options[answer]) {
          dispatch({
            type: REDUCER_ACTION_TYPE.correct,
            payload: [...state.correctAnswered, state.chosenQue[questionTracker]]
          })
          setSelectedAnswer(null)
          questionTracker++
  
  
        } else if (selectedAnswer && selectedAnswer != state.chosenQue[questionTracker].options[answer]){
            dispatch({
                type: REDUCER_ACTION_TYPE.wrong,
                payload: [...state.wrongAnswered, state.chosenQue[questionTracker]]
            })
          setSelectedAnswer(null)
          questionTracker++
        }
        if (10 <= questionTracker) {
          return navigate(`/${subject}/result`)
          
        }
        setQuestionTracker(questionTracker)
      }


      const startHandler = () =>{
        dispatch({
            type: REDUCER_ACTION_TYPE.reset,
            payload: {...state, chosenQue: [], correctAnswered: [], score: 0, wrongAnswered: [], selectedQue: []}
        })
      }
      const queHandler = (quest: Question[]) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.que,
            payload: quest
        })
      }
    return {state, nextHandler, startHandler, queHandler}
}

type useScoreContextType = ReturnType<typeof useScoreContext>

const initialContextState : useScoreContextType = {
    state: initState,
    nextHandler: ( questionTracker: number, 
        selectedAnswer: string | null, answer: number, setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>, 
        setQuestionTracker: React.Dispatch<React.SetStateAction<number>>, subject:any):void => {},
    startHandler: (): void =>{},
    queHandler: (quest: Question[]): void => {}
}


export const ScoreContext = createContext<useScoreContextType>(initialContextState)

type ChildrenType ={
    children?: ReactElement | undefined
}
export const ScoreProvider = ({children, ...initialState}: ChildrenType & StateType): ReactElement=>{
    return <ScoreContext.Provider value={useScoreContext(initialState)}>{children}</ScoreContext.Provider>
}