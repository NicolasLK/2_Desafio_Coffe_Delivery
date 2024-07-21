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
      <button className={className} {...props}>
        {children}
      </button>
    </>
  );
};
