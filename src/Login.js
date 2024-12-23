import React, { useState } from 'react'
import "./Login.css"
const Login = () => {
    const[user,setUser]=useState("")
    const[pass,setPass]=useState("")
    const onLogin=(event)=>{
        event.preventDefault();
        console.log("User Name : "+user);
        console.log("Password : "+pass);
        setPass("")
        setUser("")
    }
  return (
  <form className='container'>
        <input placeholder='Enter UserName' value={user} onChange={(event)=>setUser(event.target.value)} /> <br/>
        <input placeholder='Enter Your Password' value={pass} onChange={(event)=>setPass(event.target.value)}/><br/>
        <button onClick={(event)=>onLogin(event)}>Login</button>
  </form>

  )
}

export default Login
