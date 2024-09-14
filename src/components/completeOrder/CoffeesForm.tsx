import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AddressForm } from "./AddressForm";
import { MethodPaymentForm } from "./MethodPaymentForm";
import { SelectedCoffeesForm } from "./SelectedCoffeesForm";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirOrderFormSchema = z.object({
  cep: z.string().min(1, "Campo obrigatorio!"),
  street: z.string().min(1, "Campo obrigatorio!"),
  number: z.string().min(1, "Campo obrigatorio!"),
  complement: z.string(),
  district: z.string().min(1, "Campo obrigatorio!"),
  city: z.string().min(1, "Campo obrigatorio!"),
  uf: z.string().min(1, "Campo obrigatorio!"),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = z.infer<typeof confirOrderFormSchema>;

export const CoffeesForm = () => {
  const { clearCoffeeCart } = useCartContext();

  const confirmOrderForm = useForm<OrderData>({
    resolver: zodResolver(confirOrderFormSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrderForm(data: OrderData) {
    navigate("/pedido_enviado", {
      state: data,
    });

    clearCoffeeCart();
  }

  return (
    <>
      <FormProvider {...confirmOrderForm}>
        <form
          onSubmit={handleSubmit(handleConfirmOrderForm)}
          className="flex flex-col lg:flex-row gap-10 sm:gap-20 w-full max-w-[70rem] mx-auto pt-36"
        >
          <div className="w-full px-4 lg:w-1/2 lg:px-0">
            <AddressForm />
            <MethodPaymentForm />
          </div>
          <div className="w-full px-4 lg:w-1/2 lg:px-0">
            <SelectedCoffeesForm />
          </div>
        </form>
      </FormProvider>
    </>
  );
};
