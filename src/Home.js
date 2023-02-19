import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/71LbHsact9L._SX3000_.jpg"
            alt="OOPSS Banner error"
          />

          {/* Product id, title, price, rating, image */}
          <div className="home__row">
            <Product
              id="12455542"
              tittle="Lenovo IdeaPad Gaming 3 Intel Core i5 11th Gen 15.6 inch (39.62cm) FHD IP"
              price={34999}
              rating={5}
              image="https://m.media-amazon.com/images/I/41O5X+hIaPL._AC_SR160,160_.jpg"
            />
            <Product
              id="12455542"
              tittle="pTron Newly Launched Bassbuds Zen in-Ear TWS Earbuds with Quad ENC Mic & TruTalk™, 50Hrs Playtime, BT5.3 Headphones with Mic, Deep Bass, Low Latency, Touch Control, Type-C Fast Charging & IPX4 (Blue)"
              price={1999}
              rating={3}
              image="https://m.media-amazon.com/images/I/512NsY+dLlL._AC_UL320_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12455542"
              tittle="Instant Pot Air Fryer, Vortex 8 Litre ClearCook Dual Basket, Touch Control Panel, 360° EvenCrisp™ Technology, Uses 95 % less Oil, 6-in-1 Appliance: Air Fry, Roast, Broil, Bake, Reheat, and Dehydrate (Vortex 8 Litre ClearCook)"
              price={16999}
              rating={4}
              image="https://m.media-amazon.com/images/I/81W+9zsvSpL._SX466_.jpg"
            />
            <Product
              id="12455542"
              tittle="Gloye Women's Maroon Cotton Flex Kurta with Palazzo.(Size_M)"
              price={949}
              rating={5}
              image="https://m.media-amazon.com/images/I/71ov3CMHY8L._UX679_.jpg"
            />
            <Product
              id="12455542"
              tittle="Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black"
              price={545}
              rating={2}
              image="https://m.media-amazon.com/images/I/516LU0H963L._AC_UL320_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12455542"
              tittle="Flavia Womens Running Shoes"
              price={519}
              rating={5}
              image="https://m.media-amazon.com/images/I/81M3ku9jcpL._AC_UL320_.jpg"
            />
          </div>
        </div>
        {/* Product */}
      </div>
    </>
  );
}

export default Home;
