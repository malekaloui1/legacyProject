import Link from 'next/link'
import React from 'react'
import Searchbar from './searchbar'

const navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-10 items-center bg-white">
  <h1 className="text-xl text-gray-800 font-bold">
    <Link href={"/client"}>
     Page Name
    </Link></h1>
  <div className="flex items-center">
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <ul className="flex items-center space-x-6">
      <li className="font-semibold text-gray-700">Contact</li>
      <li className="font-semibold text-gray-700">About</li>
      <li className="font-semibold text-gray-700">Sign Out</li>
      <li className="font-semibold text-gray-700">Profile</li>
    </ul>
  </div>
</nav>
    // <header>
    //     <nav >
    //        <div className='flex items-center justify-between gap-4 md-gap-0'>
    //             <Link href={"/client"}>
    //                 Page Name
    //             </Link>
    //             <div>{/* <Searchbar/> */}</div>
    //              <div className='flex items-center justify-between gap-4 md-gap-1'>
    //             <div> <Link href={"/contact"}>
    //               Contact
    //             </Link>
    //             </div>
    //             <div>
    //             <Link href={"/about"}>
    //               about
    //             </Link>
    //             </div>
    //             <div>
    //             <Link href={"/profile"}>
    //               Profile
    //             </Link>
    //             <div>
    //             <Link href={"/"}>
    //               sign out
    //             </Link>
    //             </div>
    //             </div>
    //             </div>
    //             </div>
    //         </nav>
    // </header>
  )
}

export default navbar