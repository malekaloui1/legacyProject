"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
const Home = ({token}) => {
const[data,setData]=useState([])
if(token){
useEffect(()=>{
    axios.get(`http://localhost:3000/api/getUser`,{headers:{Authorization:`Bearer ${token}`}})
    .then(r=>{setData(r.data)
  localStorage.setItem("user",JSON.stringify(r.data))}).catch(err=>console.log('np',err))
  },[])
}

  
  return (
    <div>
        <img className='absolute h-full w-full' src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default Home