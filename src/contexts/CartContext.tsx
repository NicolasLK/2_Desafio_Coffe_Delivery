import { produce } from "immer";
import { createContext, ReactNode, useState } from "react";

export interface CartItemProps extends Coffee {
  quantity: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartContextProps {
  cartItems: CartItemProps[];
  quantityCart: number;
  addCoffeeToCart: (coffee: CartItemProps) => void;
  modifyQuantityCoffee: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
}

export const CartContext = createContext({} as CartContextProps);

const KEY_COFFEE_STORAGE = "coffeeCart:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>(() => {
    const storagedCoffee = localStorage.getItem(KEY_COFFEE_STORAGE);
    if (storagedCoffee) {
      return JSON.parse(storagedCoffee);
    }
    return [];
  });

  const quantityCart = cartItems.length;

  function addCoffeeToCart(coffee: CartItemProps) {
    const newCoffeeInCart = cartItems.findIndex((cartItem) => {
      return cartItem.id === coffee.id;
    });

    const newCart = produce(cartItems, (draft) => {
      if (newCoffeeInCart < 0) {
        draft.push(coffee);
      } else {
        draft[newCoffeeInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function modifyQuantityCoffee(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex((cartItem) => {
        return cartItem.id === cartItemId;
      });

      if (coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart];
        item.quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          quantityCart,
          addCoffeeToCart,
          modifyQuantityCoffee,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
