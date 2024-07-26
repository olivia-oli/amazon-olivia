import React from "react";
import Product from "./Product";
import "./Products.css";


const Products = () => {

 

  return (
    <div className="products_container">
      <div className="product_row">
        <Product
          id="1"
          title="Apple Watch Series 9 (GPS 41mm) Smartwatch with Midnight Aluminum Case
          with Midnight Sport Band M/L. Fitness Tracker, Blood Oxygen & ECG
          Apps, Always-On Retina Display"
          image="https://m.media-amazon.com/images/I/71UWyLPfGJL._AC._SR360,460.jpg"
          rating="4"
          price="$9,867"
        />
        <Product
          id="12584"
          title="Meta Quest 2 Advanced All-In-One 128GB Virtual Reality Headset"
          image="https://m.media-amazon.com/images/I/416t1WYMlTL._AC_UL480_QL65_.jpg"
          rating="2"
          price="$6,425.00"
        />
        <Product
          id="2"
          title="Manfrotto VR, Virtual Reality VR Tripod, Aluminum (MTALUVR)"
          image="https://m.media-amazon.com/images/I/518ye2jLFPL._AC_UL480_QL65_.jpg"
          rating="2"
          price="$1,699.00"
        />
      </div>
        <div className="product_row">
          <Product
            id="85"
            title="Gold Bug 2 Combo, Gold Detector, Metal Detector, Black"
            image="https://m.media-amazon.com/images/I/514seFYX88L._AC_UL480_QL65_.jpg"
            rating="7"
            price="$14,499.00"
          />
          <Product
            id="78"
            title="CBStyles i5 White Tiger Gaming Beast"
            image="https://m.media-amazon.com/images/I/81FYNutRUTL._AC_UL480_QL65_.jpg"
            rating="4"
            price="$24,950.00"
          />
          <Product
            id="1"
            title="XREAL Air 2 Pro AR Glasses, The Ultimate Wearable Display with 3-level Electrochromic Dimming, 75g 120Hz 130"
            image="https://m.media-amazon.com/images/I/51ye22RVvYL._AC_UL480_QL65_.jpg"
            rating="18"
            price="$12,095.00"
          />
        </div>
        <div className="products_row">
          <Product
            id="1"
            title="XREAL Air 2 Pro AR Glasses, The Ultimate Wearable Display with 3-level Electrochromic Dimming, 75g 120Hz 130"
            image="https://m.media-amazon.com/images/I/51ye22RVvYL._AC_UL480_QL65_.jpg"
            rating="18"
            price="$12,095.00"
          />
        </div>
      
    </div>
  );
};

export default Products;
