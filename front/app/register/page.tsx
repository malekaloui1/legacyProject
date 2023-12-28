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
    <div className='grid grid-cols-2'>
     
          <div id='div-az' className='bg-gray w-full h-full' >
            <div className='flex m-20 ml-40 '>
              <div className='flex gap-20'>
              <Link href={'/home'}>Home</Link>
              <Link href={'/About'}>About</Link>
              <Link href={'/faq'}>FAQ</Link>
              <Link href={'/login'}><h1 style={{
    'color': 'white',
    'width': '240%',
    'marginTop': '-11%',
    'height': '150%',
    'borderRadius': '25px',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent':' center',
    'backgroundImage': 'linear-gradient(-45deg,#ce7615, #fcc32c)'}}>Login</h1></Link>
              </div>
            </div>
            <div className='ml-40 mt-10'>
              <h1 className='text-center mb-5 font-extrabold text-xl'>Welcome</h1>
              <h1>Register to continue </h1>

              <div>
              <Link href={'/register'}><button className=' text-blue float-right font-bold mr-10 mb-5'>Log-in</button></Link>
                <input placeholder='Username' required type="text"
        onChange={(e)=>setName(e.target.value)} 
        className='w-[30rem] h-14 border border-gray-400 p-4  text-sm	mb-10'
        />
        <input  required type="email"
         placeholder='Email Adress '
         onChange={(e)=>setEmail(e.target.value)}
         className='w-[30rem] h-14 border border-gray-400 p-4  text-sm	mb-10'
         />
        <input placeholder='Password' required type="password"
        onChange={(e)=>setPass(e.target.value)}
        className='w-[30rem] h-14 border border-gray-400 p-4  text-sm	'
        />
      <select onChange={(e)=>setRole(e.target.value) }>
         <option >seller</option>
         <option>client</option>
       </select>
       <button onClick={()=>add()}
       style={{'backgroundImage': 'linear-gradient(90deg,#4681b9,#2c578c)'}}
       className='flex justify-center items-center w-[30rem] h-14 bg-blue mt-10 text-white'>register</button>
                  <br />
              </div>

        </div>
        </div>
        <div>
        <div className='absolute w-[30rem] h-[30rem] rounded-full opacity-[0.25] bg-black ml-[100px]'></div>
        <h3 className='text-white absolute font-bold text-5xl m-32'>Let's add a new camp travel story to your dairy!</h3>
        <h3 className='text-white absolute m-32 text-xl mt-80 font-bold'>Join us and live the adventure!</h3>
        {/* <div className='bg-gray w-64 h-64 rounded-full absolute'></div> */}
        <img className='w-full h-full float-right' src="https://static.vecteezy.com/ti/vecteur-libre/p3/2441473-illustration-de-camping-de-nuit-gratuit-vectoriel.jpg" alt="" />
        </div>
        </div>
      
    
       )
}

export default Register