
import { atom, useAtom } from "jotai";
import Immutable from "seamless-immutable";

const initialCart = Immutable([
  {
    "id": 1,
    "product_id": 1,
    "productName": "Organic Green Tea",
    "price": 12.99,
    "imageUrl": "https://picsum.photos/id/225/300/200",
    "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste.",
    "quantity": 1
  },
  {
    "id": 2,
    "product_id": 265,
    "productName": "Organic Red Tea",
    "price": 12.99,
    "imageUrl": "https://picsum.photos/id/225/300/200",
    "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste.",
    "quantity": 1
  },
  {
    "id": 3,
    "product_id": 594,
    "productName": "Organic Black Tea",
    "price": 12.99,
    "imageUrl": "https://picsum.photos/id/225/300/200",
    "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste.",
    "quantity": 1
  },
])

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
        return currentCart.concat({...product, product_id: product.id, quantity: 1});
      }
    });
  };

  const modifyQuantity = (product_id, quantity) => {
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

  return {
    getCart,
    getCartTotal,
    addToCart,
    modifyQuantity,
    removeFromCart
  };
};
