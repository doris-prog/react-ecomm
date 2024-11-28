import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import ProductCard from "./ProductCard";

export default function HomePage() {

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