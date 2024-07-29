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
    <div className="flex items-center gap-2 p-2 rounded-md bg-base-button">
      <CustomButton
        type="button"
        onClick={decQtdCoffee}
        className="flex items-center justify-center  border-none bg-none text-product-purple_dark disabled:opacity-5 hover:text-product-purple_dark"
        disabled={quantity <= 1}
      >
        <Minus className="w-3.5 h-3.5" />
      </CustomButton>
      <p className="max-w-[2rem] max-h-[2rem] bg-transparent border-none focus:outline-none font-Roboto_Regular text-textM text-base-title text-justify">
        {quantity}
      </p>
      <CustomButton
        type="button"
        onClick={addQtdCoffee}
        className="flex items-center justify-center  border-none text-product-purple_dark bg-none disabled:opacity-5 hover:text-product-purple_dark"
      >
        <Plus className="w-3.5 h-3.5" />
      </CustomButton>
    </div>
  );
};
