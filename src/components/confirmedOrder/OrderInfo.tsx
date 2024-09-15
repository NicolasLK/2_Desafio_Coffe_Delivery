import { ReactNode } from "react";

interface OrderInfoProps {
  icon: ReactNode;
  text: ReactNode;
  className: string;
}

export const OrderInfo = ({ icon, text, className }: OrderInfoProps) => {
  return (
    <>
      <div className="flex items-center gap-2 sm:gap-3">
        <div
          className={`flex items-center p-1 sm:p-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${className}`}
        >
          {icon}
        </div>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-Roboto_Regular text-base-text">
          {text}
        </p>
      </div>
    </>
  );
};
