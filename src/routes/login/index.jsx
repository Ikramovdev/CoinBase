import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp } from '../../pages/Login'

function LoginRoutes() {
  return (
    <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
  )
}

export default LoginRoutes