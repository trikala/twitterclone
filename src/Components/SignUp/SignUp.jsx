import React ,{useState}from 'react'
import { TwitterOutlined } from '@ant-design/icons';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const[user,setUser]=useState('');
    const[pass,setPass]=useState('');
    const[mail,setMail]=useState('');
    const navigate = useNavigate();
    // console.log(user);
    // console.log(pass);
    // console.log(mail);
    const submit=()=>{
        if(user!=''&&pass!=''&&mail!=''){
        localStorage.setItem('username',user)
        localStorage.setItem('password',pass)
        localStorage.setItem('email',mail)

        navigate('/');
        }


    }
    return (
        <div className='sign'>
            <div className='sign-wrapper'>

                <form >
                    <div className='htag'><span>SIGN UP <TwitterOutlined/></span></div>
                    <div className='Name tag'>
                        <label htmlFor="name">NAME * : </label>
                        <br />
                        <input 
                            type="text" 
                            id='name' 
                            className='same'
                            placeholder='Enter your name' 
                            onChange={(e)=>setUser(e.target.value)}
                            value={user}
                            required 
                        />
                    </div>
                    <div className='mail tag'>
                        <label htmlFor="email">EMAIL * : </label>
                        <br />
                        <input 
                            type="email" 
                            className='same'
                            id='email' 
                            value={mail}
                            placeholder='Enter your email'
                            onChange={(e)=>setMail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className='password tag'>
                        <label htmlFor="pass">PASSWORD * : </label>
                        <br />
                        <input 
                            type="password"     
                            id="pass" 
                            className='same'
                            value={pass}
                            placeholder='Enter your password'
                            onChange={(e)=>setPass(e.target.value)}
                            required 
                        />
                    </div>
                    <div className='btn'>
                        
                        <button className='btn-sub' onClick={submit}> SIGN UP </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
