import { MapPin, ShoppingCart } from "lucide-react";
import { Logo } from "./Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { CustomButton } from "../CustomButton";
import { useCartContext } from "../../hooks/useCartContext";

export const Header = () => {
  const navigate = useNavigate();

  const { quantityCart } = useCartContext();

  return (
    <>
      <header className="flex items-center justify-between w-full py-8 px-6 md:px-20 lg:px-40 bg-base-background fixed top-0 z-10 shadow-md">
        <NavLink to="/" className="w-fit">
          <Logo />
        </NavLink>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 p-2 bg-product-purple_light rounded-md">
            <MapPin color="#8047F8" className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-product-purple_dark font-Roboto_Regular text-textXS md:text-textS">
              Criciuma, SC
            </p>
          </span>
          <CustomButton
            onClick={() => {
              navigate("/carrinho");
            }}
            className="bg-product-yellow_light p-2 relative"
          >
            {quantityCart > 0 && (
              <span className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5 bg-product-yellow_dark rounded-full font-Roboto_Bold text-textXS text-base-white top-custom_top right-custom_right absolute">
                {quantityCart}
              </span>
            )}
            <ShoppingCart
              fill="#C47F17"
              color="#C47F17"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </CustomButton>
        </div>
      </header>
    </>
  );
};
