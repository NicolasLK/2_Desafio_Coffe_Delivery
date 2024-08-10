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
  const { modifyQuantityCoffee } = useCartContext();

  function handleAddQtdCoffee() {
    modifyQuantityCoffee(coffee.id, "increase");
  }

  function handleDecQtdCoffee() {
    modifyQuantityCoffee(coffee.id, "decrease");
  }

  const coffeeTotalPrice = coffee.price * coffee.quantity;

  const formattedCoffeeTotalPrice = formatMoney(coffeeTotalPrice);

  return (
    <>
      <article className="flex px-1 py-2">
        <div className="flex items-center gap-5">
          <img src={coffee.photo} alt="Imagem do café" className="w-16 h-16" />
          <div className="flex flex-col">
            <p className="font-Roboto_Regular text-textM text-base-subtitle min-w-[9.25rem]">
              {coffee.name}
            </p>
            <div className="flex items-center gap-2 mt-2 h-8">
              <div className="flex items-center gap-2 w-full max-w-[4.5rem]">
                <AppendCoffees
                  quantity={coffee.quantity}
                  addQtdCoffee={handleAddQtdCoffee}
                  decQtdCoffee={handleDecQtdCoffee}
                />
                <CustomButton className="flex gap-1 uppercase p-2 rounded-md bg-base-button font-Roboto_Regular text-base-text text-buttonS">
                  <Trash2 color="#8047F8" className="w-4 h-4" />
                  remover
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <p className="ml-auto mr-0 text-base-text font-Roboto_Bold text-textM">
          R$ {formattedCoffeeTotalPrice}
        </p>
      </article>
    </>
  );
};
