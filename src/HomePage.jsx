import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ProductCard from "./ProductCard";
// import backgroundImage from "/images/cat.jpg"

export default function HomePage() {

  // const backgroundStyle = {
  //   backgroundImage: `url(/images/cat.jpg)`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center center',
  //   backgroundRepeat: 'no-repeat',
  //   height: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   color: 'white', // Optional for text color
  // };

  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('/featured.json');
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error('Error fetching featured products: ', error);
      }
    };

    fetchFeaturedProducts();

  }, []);

  const renderFeaturedProducts = () => {
    const productElements = [];
    for (const product of featuredProducts) {
      productElements.push(
        <div key={product.id} className="col-md-3 mb-4">
          <ProductCard
            id={product.id}
            imageUrl={product.image}
            productName={product.name}
            price={product.price.toFixed(2)}/>
        </div>
      );
    }
    return productElements;
  };

  return (

    // <div style={backgroundStyle}>
    // </div>
    <>
      <Header />

      <main className="container my-5">
        
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row">

          {renderFeaturedProducts()}

        </div>

      </main>

    </>

  );
}