"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
const Register = () => {
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[name,setName]=useState("")
    const[role,setRole]=useState("seller")

const add=()=>{
    axios.post(`http://localhost:3000/auth/register`,{firstName:name,email:email,password:pass,role:role})
    .then(r=>console.log('added')).catch(err=>console.log(err))
}
    
  return (
    <div>
       <Link href={'/login'}><h1 className=' underline '>login</h1></Link> 
       <input placeholder='Username' required type="text"
       onChange={(e)=>setName(e.target.value)} />
       <input placeholder='Email' required type="email"
       onChange={(e)=>setEmail(e.target.value)} />
       <input placeholder='Password' required type="password"
       onChange={(e)=>setPass(e.target.value)} />
       <select onChange={(e)=>setRole(e.target.value) }>
        <option >seller</option>
        <option>client</option>
       </select>
       <button onClick={()=>add()}>register</button>
    </div>
  )
}

export default Register