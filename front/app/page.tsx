"use client"
import Image from 'next/image'
import ClientHome from './client/page'
import Register from './register/page'
import Login from './login/page'
import axios from 'axios'
import Page from './home/page'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const  Home=()=> {


  return (
    <div>
    <Register/>
    <ClientHome/>
    </div>
 
  )
}
export default Home
