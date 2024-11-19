import React from "react";

export default function Header(props) {
  
  console.log(props);

  return (
    <>
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to a World of Extraordinary Escapes</h1>
          <p className="lead">"Embark on Unforgettable, Hidden Escapes – Discover the Most Adventurous & Unforgettable Getaways at Irresistible Prices!"</p>
          <a href="#" className="btn btn-light btn-lg">Step In and Find Your Perfect Getaway</a>
        </div>
      </header>
    </>
  )
}