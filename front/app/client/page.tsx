import React from 'react'
import Navbar from './navbar/page'
import Footer from'./component/footer'
import Image from 'next/image'
import axios from 'axios'

interface ProductProps{
    id: number,
    name: string,
    price: number,
    description: string,
    images: string
}

const ClientHome = async(props:ProductProps) => {

    const res= await fetch("http://localhost:3000/client/getAllProduct")
    const products: ProductProps[] = await res.json()
  

  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar/>
    <div className=''>
{/* <Image
src="https://i.pinimg.com/564x/0b/bd/0f/0bbd0f185a0f564d80d17ea11147fe36.jpg"
alt=''
/> */}
</div>
<main>
<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
{products.map(props=>
        <div key={props.id}>
	{/* <Image fill={true} src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/> */}
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracki">{props.name}</h2>
			<p className="dark:text-gray-100">{props.price}</p>
      </div>      
		</div>
   <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
	</div>
   )}
</div>
</main>
        <Footer/>
        </div>
       
  )
}

export default ClientHome