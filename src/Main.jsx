import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { App } from './App';
import {Login} from './Components/Login/Login';
import {SignUp} from './Components/SignUp/SignUp';

export function Main() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/> }/>
            <Route path='/home' element={<App/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
