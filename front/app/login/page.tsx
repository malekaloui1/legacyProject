"use client"
import React,{useState,createContext} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const Login= () => {
  const[con,setCon]=useState("")
  const router=useRouter()
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")
  const[userID,setUserID]=useState(0)
  const[token,setToken]=useState('')
  const[logged,setLogged]=useState(false)

  const login=()=>{
    axios.post(`http://localhost:3000/auth/login`,{email:email,password:pass})
    .then(r=>{
      setToken(r.data.token)
      setUserID(r.data.id)
      router.push('/home')
      
    }).catch(err=>console.log(err))
  }
  
  return (
    <div className='grid grid-cols-2'>
     
          <div id='div-az' className='bg-gray w-full h-full' >
            <div className='flex m-20 ml-40 '>
              <div className='flex gap-20'>
              <Link href={'/home'}>Home</Link>
              <Link href={'/About'}>About</Link>
              <Link href={'/faq'}>FAQ</Link>
              <Link href={'/login'}><h1 style={{'color': 'white',
    'width': '240%',
    'height': '150%',
    'border-radius': '25px',
    'display': 'flex',
    'align-items': 'center',
    'justify-content':' center',
    'background-image': 'linear-gradient(-45deg,#ce7615, #fcc32c)'}}>Login</h1></Link>
              </div>
            </div>
          <input type="email"
          placeholder='Email'
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="password"
          placeholder='Password'
          onChange={(e)=>setPass(e.target.value)}
          />
       <button onClick={()=>login()} >log-in </button>

        <Link href={'/register'}><button >register</button></Link>
        </div>
        <div>
        {/* <div className='bg-gray w-64 h-64 rounded-full absolute'></div> */}
        <img className='w-full h-full float-right' src="https://static.vecteezy.com/ti/vecteur-libre/p3/2441473-illustration-de-camping-de-nuit-gratuit-vectoriel.jpg" alt="" />
        </div>
        </div>
  )
}

export default Login