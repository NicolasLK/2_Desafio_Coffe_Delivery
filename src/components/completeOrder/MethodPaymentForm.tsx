import {
  CircleDollarSign,
  CreditCard,
  DollarSign,
  Landmark,
} from "lucide-react";
import { useFormContext } from "react-hook-form";
import { PaymentMethodInput } from "../PaymentMethodInput";

const paymentMethods = {
  credit: {
    label: "cartão de crédito",
    icon: <CreditCard color="#8047F8" size={16} />,
  },
  debit: {
    label: "cartão de débito",
    icon: <Landmark color="#8047F8" size={16} />,
  },
  money: {
    label: "dinheiro",
    icon: <CircleDollarSign color="#8047F8" size={16} />,
  },
};

export const MethodPaymentForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <>
      <section className="p-10 rounded-md mb-4 bg-base-card max-w-[40rem]">
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
          {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
            <PaymentMethodInput
              key={label}
              id={key}
              icon={icon}
              label={label}
              value={key}
              {...register("paymentMethod")}
            />
          ))}
          {paymentMethodError && <p>{paymentMethodError}</p>}
        </div>
      </section>
    </>
  );
};
