import React from 'react'
import Navbar from './component/navbar';

interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    images: string
}

const ClientHome = async() => {

    const res= await fetch("http://localhost:3000/client/getAllProduct")
    const products: Product[] = await res.json()
  

  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar products={products}/>
    <main className='flex grow'>
    {products.map(product=>
        <div key={product.id}>
            
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
        )}
        </main>
        </div>
       
  )
}

export default ClientHome