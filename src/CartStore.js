
import { atom, useAtom } from "jotai";
import Immutable from "seamless-immutable";

const initialCart = Immutable([])

export const cartAtom = atom(initialCart);

export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const getCart = () => {
    return cart;
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex(item => item.product_id === product.id);
      if (existingItemIndex !== -1) {
        const currentQuantity = currentCart[existingItemIndex].quantity;
        return currentCart.setIn([existingItemIndex, 'quantity'], currentQuantity + 1);
      } else {
        return currentCart.concat({ ...product, product_id: product.id, quantity: 1 });
      }
    });
  };

  const modifyCart = (product_id, quantity) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex(item => item.product_id === product_id);
      if (existingItemIndex !== -1) {
        if (quantity < 0) {
          return currentCart.filter(item => item.product_id !== product_id);
        } else {
          return currentCart.setIn([existingItemIndex, 'quantity'], quantity);
        }
      }
    });
  }

  const removeFromCart = (product_id) => {
    setCart((currentCart) => {
      return currentCart.filter(item => item.product_id !== product_id);
    });
  }

  const setCartContent = (cartItems) => {
    setCart(Immutable(cartItems));
  }

  return {
    getCart,
    getCartTotal,
    addToCart,
    modifyCart,
    removeFromCart,
    setCartContent
  };
};
