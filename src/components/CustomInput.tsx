import { forwardRef, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  rightText?: string;
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <>
        <div className="flex flex-col gap-[0.3rem] relative">
          <div
            className={`${className} h-[2.625rem] flex items-center justify-between overflow-hidden rounded border border-base-button shadow-sm focus-within:border-product-yellow_dark`}
          >
            <input
              ref={ref}
              className="flex-1 bg-base-input border-none p-3 h-full font-Roboto_Regular text-textS text-base-label shadow-sm placeholder:text-base-label outline-none focus-within:border-none"
              {...props}
            />
            {rightText && (
              <p className="mr-3 sm:mr-2 rounded font-Roboto_Regular text-textXS capitalize italic">
                {rightText}
              </p>
            )}
          </div>
          {error && (
            <p className="font-Roboto_Regular text-textXS text-error italic">
              {error}
            </p>
          )}
        </div>
      </>
    );
  }
);
