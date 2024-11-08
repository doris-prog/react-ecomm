import React, { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {

  const [location] = useLocation();

  const [isNavbarShowing, setNavbarShowing] = useState(false);

  const toggleNavbar = () => {
    setNavbarShowing(!isNavbarShowing);
  };

  useEffect(() => {
    const syncNavbar = () => {
      if (window.innerWidth >= 992) {
        setNavbarShowing(true);
      } else {
        setNavbarShowing(false);
      }
    };

    windows.addEventListener('resize', syncNavbar);

    return () => window.removeEventListener('resize', syncNavbar);
  }, []);

  const isActiveLink = (url) => {
    if (location == url) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">E-Shop</a>
          <button className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={'nav-link ${location === "/" ? "active" : ""}'} aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={'nav-link ${location === "/products" ? "active" : ""}'} href="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className={'nav-link ${location === "/register" ? "active" : ""}'}href="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className={'nav-link ${location === "/cart" ? "active" : ""}'} href="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
};