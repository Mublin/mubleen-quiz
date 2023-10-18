import axios from "axios"
import { useContext } from "react"
import { UserContext } from "../context/useUser"

export type Question = {
    questions: string
    options: string[]
    answerIndex: number
    id: number | string
}
export type QuestionSubject = {
    questions: string
    options: string[]
    answerIndex: number
    id: number | string
    subject: string
}
export type wrongAnswerType = {
  questions: string
  options: string[]
  answerIndex: number
  id: number | string
  chosen: number
}
export type User = {
    name: string
    email: string
    username: string
    token: string
    highScoresubject : {
        eng: number
        maths: number
        chemistry: number
        physics: number
        biology: number
    }
}

export const getError = (err : any) : string => {
  return err.response && err.response.data ? err.response.data.message : err.message ? err.message : err
}
export const subjectSelector = (subjec: string)=>{
  const subj = subjec === "maths" ? 'maths'
            : subjec === "physics" ? 'physics'
            : subjec === "chemistry" ? 'chemistry'
            : subjec === "eng-lang" ? 'eng'
            : subjec === "biology" ? 'biology' : null;
  return subj
}