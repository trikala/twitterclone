import React ,{useState}from 'react'
// import {Tweetbox} from './Tweetbox'
import { Feed } from './Feed'
import './HomeMid.css'

export function HomeMid() {
  
  return (
    <div className='mid-main'>
      <div className='head'>
        Home
      </div>
      <div className='tweet-function'>
        <Feed/>
      </div>
    </div>
  )
}

