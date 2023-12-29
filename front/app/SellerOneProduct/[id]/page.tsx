"use client"

import axios from 'axios';
import { useState, useEffect } from 'react';
import SellerNavbar from '../../SellerNavbar/page';
import UpdateProduct from '../../UpdateProduct/page';
import "./SellerOneProduct.css"

interface Product {
  id: number;
  name: string;
  images: string;
  price: number;
  description: string;
  unit: string;
}



const SellerOneProduct = () => {
  const [oneProduct, setOneProduct] = useState<Product>({});
  const [show, setShow] = useState<boolean>(false);
 

  useEffect(() => {
      axios
        .get<Product>(`http://localhost:3000/seller/getOne/`)
        .then((res) => {
          setOneProduct(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const remove = (productId: string): void => {
    axios
      .delete(`http://localhost:3000/seller/removeProduct/`)
      .then(() => {
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SellerNavbar />
      <div className="product-container">
        <img className="" src={oneProduct.images} alt="" />
        <h4>{oneProduct.name}</h4>
        <div>
          <div>Price: {oneProduct.price}</div>
          <div>Description: {oneProduct.description}</div>
          <div>Unit: {oneProduct.unit}</div>
        </div>
        <button
          className="delete-button"
          onClick={() => {
            remove(oneProduct.id);
          }}
        >
          Delete
        </button>
        <button
          className="edit-button"
          onClick={() => {
            setShow(!show);
          }}
        >
          Edit
        </button>
        {show && <UpdateProduct oneProduct={oneProduct} />}
      </div>
    </div>
  );
};

export default SellerOneProduct;
