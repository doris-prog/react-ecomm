import React, { useEffect } from "react";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import RegisterPage from "./RegisterPage";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './style.css';
import { useFlashMessage } from "./FlashMessageStore";
import { Route, Switch } from "wouter";

export default function App() {

  const { clearMessage, getMessage } = useFlashMessage();
  const flashMessage = getMessage();

  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [flashMessage]);

  return (
    <>
      <Navbar />

      { flashMessage.message && (
        <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
        {flashMessage.message}
        </div>
      )}

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={UserLogin} />
        <Route path="/cart" component= {ShoppingCart} />
      </Switch>

      <Footer />
    </>
  )
}