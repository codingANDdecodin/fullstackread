import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [email,setEmail]=useState('')
  const [passward,setPassward]=useState('')

   let navigate=useNavigate()

  const submitHandler=async(e)=>{
    e.preventDefault();
    try{
             await axios.post('http://localhost:4999/',{email,passward})
             .then(res=>{
              if(res.data=='exist'){
                navigate('/home',{state:{id:email}})
                console.log('exist')
              }else if(res.data=='notexist'){
                alert('user have not sogn in')
                console.log('not exsist')
              }
             }).catch(err=>{
              alert(err)
              console.log(err)
             })
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
    <h1>Login</h1>
    <form action='POST'> 
      <input type='email' name='email' placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}}></input>
      <input type='passward' name='passward' placeholder='enter passward' onChange={(e)=>{setPassward(e.target.value)}}/><br/>
      <input type='submit' value='submit'  onClick={submitHandler}></input>
    </form>
    <br/>
    OR
    <br/>
    <Link to='/signup'>sign up</Link>
    </div>
  )
}

export default Login