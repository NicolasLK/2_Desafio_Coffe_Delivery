import { Minus, Plus } from "lucide-react";
import { CustomButton } from "../CustomButton";

interface AppendCoffeesProps {
  quantity: number;
  addQtdCoffee: () => void;
  decQtdCoffee: () => void;
}

export const AppendCoffees = ({
  quantity,
  addQtdCoffee,
  decQtdCoffee,
}: AppendCoffeesProps) => {
  return (
    <>
      <div className="flex flex-1 items-center justify-between gap-2 p-2 w-full rounded-md bg-base-button">
        <CustomButton
          type="button"
          onClick={decQtdCoffee}
          className="flex items-center justify-center w-[0.875rem] h-[0.875rem] border-none bg-none text-product-purple_dark disabled:opacity-5 hover:text-product-purple_dark"
          disabled={quantity <= 1}
        >
          <Minus className="w-3.5 h-3.5" />
        </CustomButton>
        <input
          type="number"
          readOnly
          className="w-full bg-transparent border-none focus:outline-none font-Roboto_Regular text-textM text-base-title text-center"
          value={quantity}
        />
        <CustomButton
          type="button"
          onClick={addQtdCoffee}
          className="flex items-center justify-center w-[0.875rem] h-[0.875rem] border-none text-product-purple_dark bg-none disabled:opacity-5 hover:text-product-purple_dark"
        >
          <Plus className="w-3.5 h-3.5" />
        </CustomButton>
      </div>
    </>
  );
};
