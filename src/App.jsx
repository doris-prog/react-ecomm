import React from "react";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import RegisterPage from "./RegisterPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './style.css';

// import Counter from "./Counter";
// import Timer from "./Timer";
import { Route, Switch } from "wouter";

export default function App() {

  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>

      <Footer />
    </>
  )
}