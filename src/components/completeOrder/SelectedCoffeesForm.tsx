import { useNavigate } from "react-router-dom";
import { CustomButton } from "../CustomButton";
import { CoffeeItem } from "./CoffeeItem";
import { ValueCartForm } from "./ValueCartForm";

export const SelectedCoffeesForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="mb-4 font-Baloo2_Bold text-titleXS">Cafés selecionados</h1>
      <section className="flex flex-col gap-6 p-10 rounded-tl-md rounded-bl-[2.75rem] rounded-tr-[2.75rem] rounded-br-md mb-2 bg-base-card">
        <CoffeeItem />
        <CoffeeItem />
        <div className="flex flex-col gap-3">
          <ValueCartForm />
        </div>
        <CustomButton
          onClick={() => {
            navigate("/pedido_enviado");
          }}
          className="px-2 py-3 rounded-md bg-product-yellow font-Roboto_Bold text-buttonG text-base-white uppercase"
        >
          confirmar pedido
        </CustomButton>
      </section>
    </>
  );
};
