"use client"
import React,{useState} from 'react'
import axios from "axios"

const Searchbar = ({products}) => {

    const [searchData, setSearchData] = useState ([])
    const [search, setSearch] = useState("");

    const handleSearch= async(name:string)=>{
       axios.get(`http://localhost:3000/client/searchProductByName/${name}`)
       .then((res)=>setSearchData(res.data))
    }

  return (
    <div className="SearchBar">
      <input
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      className="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..."
      />
      <button onClick={()=>{handleSearch(products.name)}}>Search</button>
    </div>
  )
}

export default Searchbar