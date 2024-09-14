import { Coffee, Package, ShoppingCart, Timer } from "lucide-react";
import imgGiantCoffe from "./../../assets/GiantCoffee.png";

export const Intro = () => {
  return (
    <>
      <article className="bg-custom-bg bg-center bg-repeat bg-cover w-full pt-24">
        <div className="w-full max-w-[70rem] h-auto lg:h-[34rem] flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-10 lg:px-0 mr-auto ml-auto">
          <div className="flex flex-col gap-10 lg:gap-24 items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
              <h1 className="font-Baloo2_ExtraBold text-left text-titleL lg:text-titleXL text-base-title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="font-Roboto_Regular text-textM lg:text-textL text-base-subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 lg:gap-x-10">
              <div className="flex items-center gap-3">
                <span className="bg-product-yellow_dark rounded-full p-2">
                  <ShoppingCart
                    fill="#FAFAFA"
                    color="#FAFAFA"
                    className="w-4 h-4"
                  />
                </span>
                <p className="font-Roboto_Regular text-textS text-base-text">
                  Compra simples e segura
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-base-text rounded-full p-2">
                  <Package color="#FAFAFA" className="w-4 h-4" />
                </span>
                <p className="font-Roboto_Regular text-textS text-base-text">
                  Embalagem mantém o café intacto
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-product-yellow rounded-full p-2">
                  <Timer color="#FAFAFA" className="w-4 h-4" />
                </span>
                <p className="font-Roboto_Regular text-textS text-base-text">
                  Entrega rápida e rastreada
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-product-purple rounded-full p-2">
                  <Coffee fill="#FAFAFA" color="#FAFAFA" className="w-4 h-4" />
                </span>
                <p className="font-Roboto_Regular text-textS text-base-text">
                  O café chega fresquinho até você
                </p>
              </div>
            </div>
          </div>
          <img
            src={imgGiantCoffe}
            alt="Imagem de um copo de café"
            className="w-full max-w-[20rem] lg:max-w-none lg:w-[29rem] h-auto mt-10 lg:mt-0"
          />
        </div>
      </article>
    </>
  );
};
