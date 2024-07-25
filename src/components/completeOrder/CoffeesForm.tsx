import {
  CircleDollarSign,
  CreditCard,
  DollarSign,
  Landmark,
  MapPinned,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import americanCoffeIMG from "../../../public/coffees/americano.png";
import { AppendCoffees } from "../home/AppendCoffees";

export const CoffeesForm = () => {
  const [qtdCoffee, setQtdCoffee] = useState(1);

  function handleAddQtdCoffee() {
    setQtdCoffee((state: number) => state + 1);
  }

  function handleDecQtdCoffee() {
    setQtdCoffee((state: number) => state - 1);
  }

  return (
    <>
      <form className="flex gap-20 w-full max-w-[70rem] mr-auto ml-auto">
        <div className="">
          <h1 className="mb-4">Complete seu pedido</h1>
          <section className="p-10 rounded-md mb-2 bg-base-card">
            <span className="flex gap-2 mb-8">
              <MapPinned className="w-5 h-5" />
              <span className="flex flex-col gap-[0.125rem]">
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </span>
            </span>
            <article className="grid grid-cols-1 gap-8 w-full">
              <div>
                <input
                  type="text"
                  placeholder="CEP"
                  className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Rua"
                className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
              />
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Número"
                  className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
                />
                <div className="flex items-center gap-1 flex-1 bg-base-input shadow-sm">
                  <input
                    type="text"
                    placeholder="Complemento"
                    className="p-3 rounded bg-base-input text-base-label w-full font-Roboto_Regular text-textS border border-r-0"
                  />
                  <p className="font-Roboto_Regular text-textXS text-center italic capitalize text-base-label h-full p-3 rounded border border-l-0">
                    opcional
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
                />
                <input
                  type="text"
                  placeholder="UF"
                  className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
                />
              </div>
            </article>
          </section>
          <section className="p-10 rounded-md mb-4 bg-base-card">
            <span className="flex gap-2 mb-8">
              <DollarSign className="w-5 h-5" />
              <span className="flex flex-col gap-[0.125rem]">
                <p>pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </span>
            </span>
            <div className="flex items-center gap-3 w-full">
              <span className="flex items-center gap-3 p-3 rounded-md min-w-[11.25rem] bg-base-button">
                <CreditCard />
                <p className="font-Roboto_Regular text-textXS text-base-text uppercase">
                  cartão de crédito
                </p>
              </span>
              <span className="flex items-center gap-3 p-3 rounded-md min-w-[11.25rem] bg-base-button">
                <Landmark />
                <p className="font-Roboto_Regular text-textXS text-base-text uppercase">
                  cartão de débito
                </p>
              </span>
              <span className="flex items-center gap-3 p-3 rounded-md min-w-[11.25rem] bg-base-button">
                <CircleDollarSign />
                <p className="font-Roboto_Regular text-textXS text-base-text uppercase">
                  dinheiro
                </p>
              </span>
            </div>
          </section>
        </div>
        <div>
          <h1 className="mb-4">Cafés selecionados</h1>
          <section className="p-10 rounded-tl-md rounded-bl-[2.75rem] rounded-tr-[2.75rem] rounded-br-md mb-2 bg-base-card">
            <article className="flex items-start px-1 py-2 border-2">
              <div className="flex items-center gap-3">
                <img
                  src={americanCoffeIMG}
                  alt="Imagem do cafe"
                  className="w-16 h-16"
                />
                <div className="flex flex-col gap-2 w-full">
                  <p className="capitalize">expresso tradicional</p>
                  <div className="flex gap-2 border-2">
                    <AppendCoffees
                      quantity={qtdCoffee}
                      addQtdCoffee={handleAddQtdCoffee}
                      decQtdCoffee={handleDecQtdCoffee}
                    />
                    <button className="flex items-center gap-1 px-2 rounded-md bg-base-button uppercase">
                      <Trash2 className="w-4 h-4" />
                      remover
                    </button>
                  </div>
                </div>
              </div>
              <p>ola</p>
            </article>
          </section>
        </div>
      </form>
    </>
  );
};
