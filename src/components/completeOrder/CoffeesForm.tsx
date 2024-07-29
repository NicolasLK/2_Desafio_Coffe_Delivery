import { AddressForm } from "./AddressForm";
import { MethodPaymentForm } from "./MethodPaymentForm";
import { SelectedCoffeesForm } from "./SelectedCoffeesForm";

export const CoffeesForm = () => {
  return (
    <>
      <form className="flex gap-20 w-full max-w-[70rem] mr-auto ml-auto">
        <div>
          <AddressForm />
          <MethodPaymentForm />
        </div>
        <div className="w-full">
          <SelectedCoffeesForm />
        </div>
      </form>
    </>
  );
};
