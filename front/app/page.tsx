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
import Sales from './home/sales'
import { createContext } from 'vm'
const  Home=()=> {


  return (
    <div>
    <Register/>  
    {/* <ClientHome/>
    <Register/>
       <Dashboard/> */}
    
    </div>
 
  )
}
export default Home
