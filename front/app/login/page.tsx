"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import axios from 'axios'

const Login = () => {
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")

  const login=()=>{
    axios.post(`http://localhost:3000/auth/login`,{email:email,password:pass})
    .then(r=>console.log(r.data)).catch(err=>console.log(err))
  }
  return (
    <div>
        
          <input type="email"
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="password"
          onChange={(e)=>setPass(e.target.value)}
          />
          <button onClick={()=>login()}>log-in</button>
       
        </div>
  )
}

export default Login