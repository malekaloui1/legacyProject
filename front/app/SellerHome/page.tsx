"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerNavbar from '../SellerNavbar/page';
import Link from 'next/link'

interface Product {
  id:number;
  name: string;
  price: number;
  images: string;
}



const SellerHome = ({}) => {
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/seller/getAll')
      .then((res) => {
        const fetchedProducts: Product[] = res.data;
        setFetchedProducts(fetchedProducts);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div>
      <SellerNavbar />
      <div className="Container">
        {fetchedProducts.map((el, i) => (
          <div key={i} className="Card">
            <img className="image" src={el.images} alt={el.name} />
            <h4 id="Title" >
            <Link href={`/SellerOneProduct/${el.id}`}>{el.name}</Link>
            </h4>
            <div id="price">{el.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerHome;
