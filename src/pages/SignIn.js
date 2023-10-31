import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

function SignIn() {
  const [email,setEmail]=useState('')
  const [passward,setPassward]=useState('')

  let navigate=useNavigate()
  const submitHandler=async(e)=>{
    e.preventDefault();
    try{
             await axios.post('http://localhost:4999/signup',{email,passward})
             .then(res=>{
              if(res.data==='exist'){
                // navigate('/home',{state:{id:email}})
                alert('user already exist')
              }else if(res.data==='notexist'){
                // alert('user have not sogn in')
                navigate('/home',{state:{id:email}})
              }
             }).catch(err=>{
              alert('wrong data')
              console.log(err)
             })
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
    <h1>sign Up</h1>
    <form method='post'  action='http://localhost:3000/signup'> 
      <input type='email' name='email' placeholder='enter email' onChange={(e)=>{setEmail(e.target.value)}}></input>
      <input type='passward' name='passward' placeholder='enter passward' onChange={(e)=>{setPassward(e.target.value)}}/><br/>
      <input type='submit' value='submit'  onClick={submitHandler}></input>
    </form>
    <br/>
    OR
    <br/>
    <Link to='/'>login</Link>
    </div>
  )
}

export default SignIn