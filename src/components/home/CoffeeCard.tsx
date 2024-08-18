import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { CustomButton } from "../CustomButton";
import { AppendCoffees } from "./AppendCoffees";
import { formatMoney } from "../../utils/formatMoney";
import { useCartContext } from "../../hooks/useCartContext";

interface CoffeeProps {
  coffee: Coffee;
}

export const CoffeeCard = ({ coffee }: CoffeeProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addCoffeeToCart } = useCartContext();

  function handleAddQtdCoffee() {
    setQuantity((state: number) => state + 1);
  }

  function handleDecQtdCoffee() {
    setQuantity((state: number) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);
    setQuantity(1);
  }

  const formattedPrice = formatMoney(coffee.price);

  return (
    <>
      <form className="flex flex-col items-center p-5 pt-0 max-w-[15rem] bg-base-card rounded-tl-md rounded-br-md rounded-tr-[2.25rem] rounded-bl-[2.25rem] text-center mb-2">
        <img
          src={coffee.photo}
          alt={`Foto cafe ${coffee.name}`}
          className="w-[7.5rem] h-[7.5rem] -mt-5"
        />
        <div className="flex items-center justify-center flex-wrap gap-1 w-full my-4">
          {coffee.tags.map((tag) => (
            <span
              key={`${coffee.id}`}
              className="uppercase px-2 py-1 bg-product-yellow_light text-product-yellow_dark font-Roboto_Bold text-tag rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="capitalize font-Baloo2_Bold text-titleS mb-2">
          {coffee.name}
        </h3>
        <p className="font-Roboto_Regular text-base-text text-textS mb-8 text-center">
          {coffee.description}
        </p>
        <div className="w-full flex items-center justify-between gap-1">
          <span className="flex items-center gap-1 font-Roboto_Regular text-textS text-base-text">
            R$
            <p className="font-Baloo2_ExtraBold text-titleM">
              {formattedPrice}
            </p>
          </span>
          <AppendCoffees
            quantity={quantity}
            addQtdCoffee={handleAddQtdCoffee}
            decQtdCoffee={handleDecQtdCoffee}
          />
          <CustomButton
            type="button"
            onClick={() => {
              handleAddToCart();
            }}
            className="w-[2.375rem] h-[2.375rem] flex items-center justify-center bg-product-purple_dark p-2 rounded-md border-none ml-[0.3rem]"
          >
            <ShoppingCart fill="#FFFFFF" color="#FFFFFF" className="w-6 h-6" />
          </CustomButton>
        </div>
      </form>
    </>
  );
};
