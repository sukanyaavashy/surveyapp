import React, { useState } from 'react'
import '../App.css'
import { useNavigate,Link } from 'react-router-dom';
// import Cookies from 'js-cookie';
import axios from 'axios'

const Login = () => {

  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  const [data,setData] = useState('')
  const navigate = useNavigate()
//   const tokenCookie = Cookies.get('token');

  const handleSubmit = async(e) => {
    e.preventDefault()
    const loginPayload = {username: username,password: password}
    try{
        const url = 'https://olzl8wq71i.execute-api.ap-south-1.amazonaws.com/prod/user-registration'
        const response = await axios.post(url,loginPayload)
        const data = await response.data
        if (response.status === 200) {
          console.log("okay",data)  
          navigate('/')
        } 
      }catch(err){
        console.log(err)
  
      }
  }



  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1 className='heading'>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <div className='label'>
            <label>Username</label>
            </div>
            <input
              className='input'
              required
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="field">
          <div className='label'>
            <label>Password</label>
            </div>
            <input
              className='input'
              required
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {error && <p className ='err-msg'>Invalid Credentials</p> } */}
          <div className='btn-field'>
          <button className="button">Login</button>
          </div>
        </div>
      
      </form>
    </div>
  )
}

export default Login
