import { DollarSign } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { paymentMethods } from "./PaymentMethods";
import { PaymentMethodInput } from "../PaymentMethodInput";

export const MethodPaymentForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <>
      <section className="p-6 sm:p-10 rounded-md mb-4 bg-base-card max-w-[40rem] w-full shadow-md">
        <span className="flex gap-2 mb-8">
          <DollarSign color="#8047F8" className="w-5 h-5" />
          <span className="flex flex-col gap-[0.125rem]">
            <p className="capitalize font-Roboto_Regular text-textM text-base-subtitle">
              Pagamento
            </p>
            <p className="font-Roboto_Regular text-textS text-base-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>
        </span>
        <div className="flex justify-center flex-wrap gap-2 w-full md:justify-normal md:flex-nowrap">
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
        </div>
        {paymentMethodError && (
          <p className="font-Roboto_Regular text-textXS text-error italic">
            {paymentMethodError}
          </p>
        )}
      </section>
    </>
  );
};
