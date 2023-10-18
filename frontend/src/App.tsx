import React, { useState } from 'react'
import './App.css'
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'
import Homemenu from './screens/Homemenu'
import {Routes, Route} from 'react-router-dom'
import SubjectsPage from './screens/SubjectsPage'
import SubjectPage from './screens/SubjectPage'
import ResultPage from './screens/ResultPage'
import SignInScreen from './screens/SignInScreen'
import RegisterScreen from './screens/RegisterScreen'
import { ScoreProvider, initState } from './context/useScore'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import LeaderBoardChoose from './screens/LeaderBoardChoose'
import LeaderBoardScreen from './screens/LeaderBoardScreen'
import AboutScreen from './screens/AboutScreen'
import ProfileScreen from './screens/ProfileScreen'
import PasswordChange from './screens/PasswordChange'
import Loader from './components/Loader'


function App() {

  return (
    <>
      <NavMenu />
    <ToastContainer position='bottom-center' limit={1} />


        <div className='global'>
    <ScoreProvider  correctAnswered={initState.correctAnswered} score={initState.score} wrongAnswered={initState.wrongAnswered} chosenQue={initState.chosenQue} selectedQue={initState.selectedQue} >

          <Routes>
            <Route path='/' element={<Homemenu />}/>
            <Route path='/subjects' element={<SubjectsPage />}/>
            <Route path='/leaderboard' element={<LeaderBoardChoose />}/>
            <Route path='/about' element={<AboutScreen />}/>
            <Route path='/signin' element={<SignInScreen />}/>
            <Route path='/changepassword' element={<PasswordChange />}/>
            <Route path='/register' element={<RegisterScreen />}/>
            <Route path='/profile' element={<ProfileScreen />}/>
            <Route path='/:subject' element={<SubjectPage />}/>
            <Route path='/:subject/result' element={<ResultPage />}/>
            <Route path='/:subject/leaderboard' element={<LeaderBoardScreen />}/>
            <Route path='/*' element={<Homemenu />}/>
          </Routes>
          </ScoreProvider>

        </div>
      <Footer />
    </>
  )
}

export default App
