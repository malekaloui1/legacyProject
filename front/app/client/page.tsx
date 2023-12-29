import React from 'react'
import Navbar from './navbar/page'
import Footer from'./component/footer'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

interface ProductProps{
    id: number,
    name: string,
    price: number,
    description: string,
    images: string
}


const ClientHome = async({searchParams}: {searchParams: { [key: string]: string | string[] |undefined }}) => {
let products: ProductProps[]=[];
  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined
  console.log("search",search);
  
  async function fetchProducts(search?: string): Promise<ProductProps[]> {
    try {
        let res;
        let products: ProductProps[];

        if (search) {
            res = await axios.get(`http://localhost:3000/client/searchProductByName/${search}`);
        } else {
            res = await axios.get("http://localhost:3000/client/getAllProduct");
        }

        products = res.data;

        return products;
    } catch (error) {
        throw new Error("Failed to fetch products.");
    }
}

  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar/>
<main>
<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
{products.map(props=>
        <div key={props.id}>
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
      <Link href={{pathname:`/client/oneProduct/[productName]`, query:{products:props.name}}}
      >
			<h2 className="text-3xl font-semibold tracki">{props.name}</h2>
      </Link>
			<p className="dark:text-gray-100">{props.price}</p>
      </div>      
		</div>
   <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Add To Cart</button>
	</div>
   )}
</div>
</main>
        <Footer/>
        </div>
       
  )
}

export default ClientHome