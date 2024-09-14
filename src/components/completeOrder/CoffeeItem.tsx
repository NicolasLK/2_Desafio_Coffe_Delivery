import { AppendCoffees } from "../home/AppendCoffees";
import { CustomButton } from "../CustomButton";
import { Trash2 } from "lucide-react";
import { CartItemProps } from "../../contexts/CartContext";
import { formatMoney } from "../../utils/formatMoney";
import { useCartContext } from "../../hooks/useCartContext";

interface CoffeeItemProps {
  coffee: CartItemProps;
}

export const CoffeeItem = ({ coffee }: CoffeeItemProps) => {
  const { modifyQuantityCoffee, rmvCoffeToCart } = useCartContext();

  function handleAddQtdCoffee() {
    modifyQuantityCoffee(coffee.id, "increase");
  }

  function handleDecQtdCoffee() {
    modifyQuantityCoffee(coffee.id, "decrease");
  }

  function removeCoffeeToCart() {
    rmvCoffeToCart(coffee.id);
  }

  const coffeeTotalPrice = coffee.price * coffee.quantity;

  const formattedCoffeeTotalPrice = formatMoney(coffeeTotalPrice);

  return (
    <>
      <article className="flex px-1 py-2">
        <div className="flex items-center gap-5">
          <img src={coffee.photo} alt="Imagem do café" className="w-16 h-16" />
          <div className="flex flex-col gap-2">
            <p className="font-Roboto_Regular text-textXS sm:text-textS md:text-textM text-base-subtitle min-w-[6rem] sm:min-w-[7.5rem] md:min-w-[9.25rem]">
              {coffee.name}
            </p>
            <div className="flex items-center gap-2 w-full max-w-[4.5rem]">
              <AppendCoffees
                quantity={coffee.quantity}
                addQtdCoffee={handleAddQtdCoffee}
                decQtdCoffee={handleDecQtdCoffee}
              />
              <CustomButton
                type="button"
                onClick={removeCoffeeToCart}
                className="flex items-center gap-1 p-2.5 bg-base-button font-Roboto_Regular text-base-text text-buttonS"
              >
                <Trash2 color="#8047F8" className="w-4 h-4" />
                <p className="hidden sm:block md:text-opacity-75 lg:text-opacity-100 transition-opacity duration-300 uppercase">
                  remover
                </p>
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="ml-auto mb-auto text-base-text font-Roboto_Bold text-textXS sm:text-textS md:text-textM lg:text-textL flex items-center">
          <span className="w-fit">R$</span>
          <span className="ml-1">{formattedCoffeeTotalPrice}</span>
        </div>
      </article>
    </>
  );
};
