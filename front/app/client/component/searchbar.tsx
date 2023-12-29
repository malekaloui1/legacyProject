"use client"
import React,{useState} from 'react'
import axios from "axios"
import ProductProps from '../page' 

const Searchbar = () => {

    const [searchData, setSearchData] = useState ([])
    const [search, setSearch] = useState("");

    const handleSearch= async(name:string)=>{
       axios.get(`http://localhost:3000/client/searchProductByName/${name}`)
       .then((res)=>setSearchData(res.data))
    }

  return (
    <div className="SearchBar">
      <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
       onChange={(e) => {
        setSearch(e.target.value);
      }}
       className="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
    </div>
      
      {/* <button onClick={()=>{handleSearch()}}>Search</button> */}
    </div>
  )
}

export default Searchbar