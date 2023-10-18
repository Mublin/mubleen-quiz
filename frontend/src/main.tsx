import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider, initStateUser } from './context/useUser'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider user={initStateUser.user}>
      <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
