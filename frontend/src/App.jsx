import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/login' element={ <UserLogin />}></Route>
        <Route path='/signup' element={ <UserSignup />}></Route>
        <Route path='/captain-login' element={ < CaptainLogin />}></Route>
        <Route path='/captain-signup' element={ < CaptainSignup />}></Route>
        <Route path='/home' element={ 
          <UserProtectWrapper>
            < Home />
          </UserProtectWrapper>
        }></Route>
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }></Route>
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        }>

        </Route>
      </Routes>
    </div>
  )
}

export default App
