import { useContext } from "react";
import { CartContext, CartContextProps } from "../contexts/CartContext";

export function useCartContext(): CartContextProps {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("O useCartContext deve estar dentro de um CartContext");
  }

  return cartContext;
}
