import React from 'react';
import "./SellerNavbar.css";
import Link from 'next/link'

const SellerNavbar = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Tunisia Camping</h1>
          <ul>
            <li>
              <Link href="/SellerHome">Home</Link>
            </li>
            <li>
              <Link href="/SellerProfile/:id">Profile</Link>
            </li>
            <li>
              <Link href="/AddProduct">Create Product</Link>
            </li>
            <li>
              <Link href="/">Log Out</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SellerNavbar;
