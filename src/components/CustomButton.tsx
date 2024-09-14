import React, { ReactNode } from "react";

interface IconWrapperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  children: ReactNode;
}

export const CustomButton = ({
  className,
  children,
  ...props
}: IconWrapperProps) => {
  return (
    <>
      <button
        className={`${className} rounded-md`} // Exemplo de ajuste de padding para diferentes telas
        {...props}
      >
        {children}
      </button>
    </>
  );
};
