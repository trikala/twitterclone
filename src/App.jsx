import React from 'react'
import './App.css';
import {HomeLeft} from './Components/Home-left/HomeLeft';
import {HomeMid} from './Components/Home-mid/HomeMid';
import {HomeRight} from './Components/Home-right/HomeRight';

export function App() {
  return (
    <div className='main'>
      <HomeLeft className='left'/>
      <HomeMid className='mid'/>
      <HomeRight className='right'/>

    </div>
  )
}
