import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {

  const [isNavbarShowing, setNavbarShowing] = useState(false);
  const [location] = useLocation();

  const toggleNavbar = () => {
    setNavbarShowing(!isNavbarShowing);
  };

  useEffect(() => {
    const syncNavbar = () => {
      if (window.innerWidth >= 992) {
        setNavbarShowing(true); // open for large screen 
      } else {
        setNavbarShowing(false); //close for small screen
      }
    };

    window.addEventListener('resize', syncNavbar);
    syncNavbar();

    return () => window.removeEventListener('resize', syncNavbar);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/images/logo.png"
              alt="Paws & Pathways Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />Paws & Pathways E-Shop</a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location === "/products" ? "active" : ""}`} to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location === "/register" ? "active" : ""}`} to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location === "/login" ? "active" : ""}`} to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location === "/cart" ? "active" : ""}`} to="/cart">Shopping Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};