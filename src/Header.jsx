import React from "react";

export default function Header(props) {
  
  // console.log(props);

  return (
    <>
      <header className="bg-primary text-white text-center py-5">

      <div className="container-fluid p-0 position-relative">
        <img
          src="/images/cat.jpg"
          alt="cat"
          className="img-fluid scaled-image"
        />

        <div className="overlay-text position-absolute top: 10 p-2 text-white"  style={{ left: '40%', top: '50%', transform: 'translateX(-35%)' }}>
          <h1>Welcome to Our Pet Paradise: <br></br> Where Comfort Meets Adventure</h1>
          <p>"From Road Trips to Holiday Cheer – We’ve Got Your Pet Covered!"</p>
        </div>

      </div>

      </header>
    </>
  )
}