import React, { ReactElement, createContext, useReducer } from "react"
import { User, getError } from '../utils/utils';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";

type StateType = {
    user: User | null
}
export const enum REDUCER_ACTION_TYPE{
    signin,
    register,
    logout
}
export const initStateUser : StateType = {
    user: localStorage.getItem('userInfo') !== null
    ? JSON.parse(localStorage.getItem('userInfo') as string)
    : null
}
type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: User | null
}

const reducer = (state: StateType, action: ReducerAction): StateType =>{
    switch (action.type) {
        case REDUCER_ACTION_TYPE.signin:
            return {...state, user: action.payload as User}
        case REDUCER_ACTION_TYPE.register:
            return {...state, user: action.payload as User}
        case REDUCER_ACTION_TYPE.logout:
            return {...state, user: action.payload as null}
        default:
            return state
    }
}

const useUserContext = (initialState : StateType) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const navigate = useNavigate()

      const registerHandler = async (name: string, username: string, email: string, password : string, cPassword: string): Promise<void> =>{
            if (password === cPassword) {
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
            }} = await axios.post(`/api/users/register`, {
                name,
                password,
                email,
                username
            })
            if (data) {
                dispatch({
                    type: REDUCER_ACTION_TYPE.register,
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
                toast.success("welcome to my quiz app")
                navigate('/subjects')
    
            }
            } else{
                toast.error("passwords do not match")
                return
            }
    }
      
      const logOutHandler = () =>{
        try {
            dispatch({
                type: REDUCER_ACTION_TYPE.logout,
                payload: null
            })
            localStorage.removeItem('userInfo')
            navigate('/')
        } catch (error) {
            alert('unable to log-out')
            throw Error('unable to log-out')
        }
      }
    return {state, logOutHandler, registerHandler, ctxDispatch: dispatch}
}

type useUserContextType = ReturnType<typeof useUserContext>

const initialContextState : useUserContextType = {
    state: initStateUser,
    // signInHandler: async (username: string, password: string): Promise<void> =>{},
    registerHandler: async (name: string, username: string, email: string, password: string): Promise<void> =>{},
    logOutHandler: () =>{},
    ctxDispatch: ()=>{},
}


export const UserContext = createContext<useUserContextType>(initialContextState)

type ChildrenType ={
    children?: ReactElement | undefined
}
export const UserProvider = ({children, ...initialState}: ChildrenType & StateType): ReactElement=>{
    return <UserContext.Provider value={useUserContext(initialState)}>{children}</UserContext.Provider>
}