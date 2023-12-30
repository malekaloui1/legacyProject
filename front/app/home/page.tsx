import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Sales from './sales'
import Footer from './footer'
const Home = () => {


  return (
    <div>
      <div>
      <div className='absolute z-10 text-white font-bold flex gap-[4rem] ml-40 m-10'>
        <img className='w-10 rounded-md mr-40' src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Orange_Logo_Design_30_1024x1024.png?v=1679565592" alt="" />
        <Link href={'/home'}>Home</Link>
        <Link href={'/client/navbar/contact'}>Contact Us</Link>
        <Link href={'/client/about'}>About Us</Link>
        <Link href={'/whish'}>Wishlist</Link>
        <Link href={'/basket'}>Basket</Link>
        <div className='flex gap-4 ml-36'>
        <Link href={('/register')} className='mt-2'>Sign up</Link>
        <Link href={'/login'}><button className='w-[8rem] h-10 flex border border-white rounded-[50px] items-center justify-center'>Sign in</button></Link>

        </div>
      </div>
      <div className=' absolute text-white z-10 '>
      <h1 className=' mt-[10rem] ml-[130%] text-[60px] font-extrabold text-nowrap'>Find Yourself<br/> Outside.</h1>
      <h1 className='mt-7 ml-[133%] text-nowrap'>Book unique camping on over 300.000 campsites,<h1 className='ml-4'>cabins,RV parks,public parks and more.</h1><br/></h1>
      <button className='w-[10rem] h-9 ml-[160%] bg-orange rounded-[50px]'><a href='#d'> Discover</a></button>
      </div>
      <div className='absolute z-20 flex top-[33rem] gap-5 ml-[131px] ' >
        <div className='w-[18rem] h-[18rem] bg-white flex justify-center items-center rounded-xl mb-40'>
        <div>
        <img className='w-20 ml-24' src="https://i.pinimg.com/736x/6e/e4/7d/6ee47d0c2ebaca868277cde8b9fad16c.jpg" alt="" />
        <h1 className='text-gray-700 font-bold ml-10 text-[20px]'>Camping & Day Use</h1>
        <h3 className='text-nowrap text-[14px] mt-4 ml-2 font-bold'>Return to your favorite spot or discover<br/><h3 className='ml-4'>a new one that's right for you</h3></h3>
        </div>
      </div>
      <div className='w-[18rem] h-[18rem] bg-white flex justify-center items-center rounded-xl'>
        <div>
        <img className='w-20 ml-20 mb-2' src="https://img.freepik.com/premium-vector/paper-tickets-event-icon-vector-illustration_444196-4247.jpg" alt="" />
        <h1 className='text-gray-700 font-bold ml-10 text-[20px]'>Tours & Tickets</h1>
        <h3 className='text-nowrap text-[14px] mt-4 ml-2 font-bold'>Reserve tours and tickets to<br/><h3 className='ml-4'>participate in events.</h3></h3>
        </div>
      </div>
      <div className='w-[18rem] h-[18rem] bg-white flex justify-center items-center rounded-xl'>
        <div>
        <img className='w-28 ml-16 mb-6' src="https://img.freepik.com/free-vector/building-permit-concept-illustration_114360-7299.jpg" alt="" />
        <h1 className='text-gray-700 font-bold ml-10 text-[20px]'>Permits</h1>
        <h3 className='text-nowrap text-[14px] mt-4 ml-2 font-bold'>Obtain permits for access to high-<br/><h3 className='ml-4'>demand locations.</h3></h3>
        </div>
      </div>
      <div className='w-[18rem] h-[18rem] bg-white flex justify-center items-center rounded-xl'>
        <div>
        <img className='w-20 ml-24' src="https://img.freepik.com/premium-vector/hand-drawn-little-fish-is-hooked-up-illustration_194428-2412.jpg" alt="" />
        <h1 className='text-gray-700 font-bold ml-10 text-[20px]'>Recreation Actitivities</h1>
        <h3 className='text-nowrap text-[14px] mt-4 ml-2 font-bold'>find the best spots for hunting,phishing<br/><h3 className='ml-4'>& reactional shooting</h3></h3>
        </div>
      </div>
      </div>
        <img
        style={{'borderBottomLeftRadius': '150px',
          'borderBottomRightRadius': '150px'}}
         className='absolute h-5/6 w-full mb-[100%]' src="https://img.freepik.com/premium-photo/tent-mountains-night-with-starry-sky-background_902639-17637.jpg" alt="" />
    {/* <img className='w-20 absolute' src="https://img.freepik.com/vecteurs-premium/choix-destination-voyage-systeme-tourisme-intelligent-illustration-plate-moderne_660702-349.jpg" alt="" /> */}
</div>   
<h1 className='absolute top-[120%] left-[40%] text-[35px] font-bold'>Explore Destinations<br/> & Actitivities</h1> 
    <Sales />
    <Footer/>
    </div>
  )
}

export default Home