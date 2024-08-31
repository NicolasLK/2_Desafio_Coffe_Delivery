import { ReactNode } from "react";

interface OrderInfoProps {
  icon: ReactNode;
  text: ReactNode;
  className: string;
}

export const OrderInfo = ({ icon, text, className }: OrderInfoProps) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center p-2 w-8 h-8 rounded-full ${className}`}
        >
          {icon}
        </div>
        <p className="flex flex-col font-Roboto_Regular text-textM text-base-text">
          {text}
        </p>
      </div>
    </>
  );
};
