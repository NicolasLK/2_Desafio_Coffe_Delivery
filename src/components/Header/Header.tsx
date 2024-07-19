import { MapPin, ShoppingCart } from "lucide-react";
import { Logo } from "./Logo";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex items-center justify-between w-full py-8 px-40 bg-base-background sticky top-0">
        <NavLink to="/" className="w-fit">
          <Logo />
        </NavLink>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 p-2 bg-product-purple_light rounded-md">
            <MapPin color="#8047F8" className="w-6 h-6" />
            <p className="text-product-purple_dark font-Roboto_Regular text-textS">
              Criciuma, SC
            </p>
          </span>
          <button
            onClick={() => {
              navigate("/carrinho");
            }}
            className="bg-product-yellow_light p-2 rounded-md"
          >
            <ShoppingCart fill="#C47F17" color="#C47F17" className="w-6 h-6" />
          </button>
        </div>
      </header>
    </>
  );
};
