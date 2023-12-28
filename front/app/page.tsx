"use client"
import Image from 'next/image'
import ClientHome from './client/page'
import SellerNavbar from './SellerNavbar/page'
import Dashboard from './adminDashboard/page'
import Register from './register/page'
import Login from './login/page'
import axios from 'axios'
import Page from './home/page'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const  Home=()=> {


  return (
    <div>
    <SellerNavbar/>  
    <ClientHome/>
    <Register/>
       <Dashboard/>
    
    </div>
 
  )
}
export default Home
