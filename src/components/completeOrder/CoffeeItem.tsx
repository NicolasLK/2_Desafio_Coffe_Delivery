import { useState } from "react";
import { AppendCoffees } from "../home/AppendCoffees";
import americanCoffeIMG from "/coffees/americano.png";
import { CustomButton } from "../CustomButton";
import { Trash2 } from "lucide-react";

export const CoffeeItem = () => {
  const [qtdCoffee, setQtdCoffee] = useState(1);

  function handleAddQtdCoffee() {
    setQtdCoffee((state: number) => state + 1);
  }

  function handleDecQtdCoffee() {
    setQtdCoffee((state: number) => state - 1);
  }

  return (
    <>
      <article className="flex gap-10 px-1 py-2">
        <div className="flex items-center gap-5">
          <img
            src={americanCoffeIMG}
            alt="Imagem do café"
            className="w-16 h-16"
          />
          <div className="flex flex-col">
            <p>Nome do café</p>
            <div className="flex items-center gap-2 mt-2 h-8">
              <div className="flex items-center gap-2 w-full max-w-[4.5rem]">
                <AppendCoffees
                  quantity={qtdCoffee}
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
          R$ 9,90
        </p>
      </article>
    </>
  );
};
