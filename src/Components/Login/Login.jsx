import React, { useState } from 'react'
import './Login.css';
import twitterLogin from '../twitter.png';
import { TwitterOutlined,RightOutlined } from '@ant-design/icons';
import { useNavigate ,Link} from 'react-router-dom';
// import {Alert} from 'antd'

export function Login() {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const navigate=useNavigate();
  const submit =(e)=>{
    e.preventDefault()
    const id = localStorage.getItem('email');
    const pd = localStorage.getItem('password');

    if(id==email&&pd==pass){
      navigate('home');
    }
    else{
      
    alert('Invalid username and password.');
    alert('if you are new to this clone then sign up first')
    }
  }
  return (
    <div className='login-main'>
      <div className='login'>
        <div className='login-form'>
          <div className='icon-twitter'>
          <TwitterOutlined  style={{fontSize:'40px'}} />
          </div>
          <form onSubmit={submit} >
            <div className='mail'>
              <label htmlFor="email">EMAIL *  :</label>
              <br />
              <input
                type="email"
                id='email'
                className='com'
                placeholder='Enter registerd ID'
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className='password mail'>
              <label htmlFor="pass">PASSWORD * : </label>
              <br />
              <input
                type="password"
                id='pass'
                className='com'
                onChange={(e)=>setPass(e.target.value)}
                placeholder='Enter password'
                required
              />

            </div>

            <div className='button'>
              <button className='btn-in' type='submit'> LOGIN <span style={{paddingLeft:'142px'}}><RightOutlined /></span></button>
            </div>

          </form>
          <Link to='/signup'>for new users</Link>

        </div>
        <div className='login-left'>
          <img src={twitterLogin} alt="loading..." className='twitter-image' />
        </div>
      </div>
    </div>
  )
}


