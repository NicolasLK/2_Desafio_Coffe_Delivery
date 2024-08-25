import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface PaymentMethodInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
  label: string;
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <>
      <div className="flex items-center gap-2 p-3 rounded-md bg-base-button overflow-hidden">
        <input id={id} ref={ref} type="radio" name="paymentMethod" {...props} />
        <label
          htmlFor={id}
          className="font-Roboto_Regular text-buttonS text-base-text uppercase min-w-[11.25rem] flex-grow"
        >
          <div className="flex items-center gap-2">
            {icon}
            {label}
          </div>
        </label>
      </div>
    </>
  );
});
