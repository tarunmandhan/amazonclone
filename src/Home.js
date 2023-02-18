import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71LbHsact9L._SX3000_.jpg"
          alt="OOPSS Banner error"
        />
        {/* Product id, title, price, rating, image */}
        <Product
          id="12455542"
          tittle="Lenovo IdeaPad Gaming 3 Intel Core i5 11th Gen 15.6 inch {(39.62cm)} FHD IP"
          price={35000}
          rating={5}
          image="https://m.media-amazon.com/images/I/41bufC9IzpL._AC_SR400,600_.jpg"
        />
        {/* Product */}
      </div>
    </>
  );
}

export default Home;
