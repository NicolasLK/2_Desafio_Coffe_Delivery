import {
  CircleDollarSign,
  CreditCard,
  DollarSign,
  Landmark,
} from "lucide-react";

export const MethodPaymentForm = () => {
  return (
    <>
      <section className="p-10 rounded-md mb-4 bg-base-card">
        <span className="flex gap-2 mb-8">
          <DollarSign color="#8047F8" className="w-5 h-5" />
          <span className="flex flex-col gap-[0.125rem]">
            <p className="capitalize font-Roboto_Regular text-textM text-base-subtitle">
              pagamento
            </p>
            <p className="font-Roboto_Regular text-textS text-base-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>
        </span>
        <div className="flex items-center gap-3 w-full">
          <span className="flex items-center gap-3 p-3 rounded-md min-w-[11.25rem] bg-base-button">
            <CreditCard color="#8047F8" />
            <p className="font-Roboto_Regular text-textXS text-base-text uppercase">
              cartão de crédito
            </p>
          </span>
          <span className="flex items-center gap-3 p-3 rounded-md min-w-[11.25rem] bg-base-button">
            <Landmark color="#8047F8" />
            <p className="font-Roboto_Regular text-textXS text-base-text uppercase">
              cartão de débito
            </p>
          </span>
          <span className="flex items-center gap-3 p-3 rounded-md min-w-[11.25rem] bg-base-button">
            <CircleDollarSign color="#8047F8" />
            <p className="font-Roboto_Regular text-textXS text-base-text uppercase">
              dinheiro
            </p>
          </span>
        </div>
      </section>
    </>
  );
};
