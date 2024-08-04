import { DollarSign, MapPin, Timer } from "lucide-react";
import deliverymanImg from "../../assets/Motorciclye.png";

export default function ConfirmedOrder() {
  return (
    <>
      <section className="w-full max-w-[70rem] h-[34rem] flex items-center gap-16 mr-auto ml-auto">
        <div className="flex flex-col gap-10">
          <span>
            <h1 className="font-Baloo2_ExtraBold text-titleL text-product-yellow_dark">
              Uhu! Pedido confirmado
            </h1>
            <p className="font-Roboto_Regular text-textL text-base-text">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </span>
          <article className="flex flex-col gap-8 p-10 border border-l-product-yellow border-t-product-yellow border-r-product-purple border-b-product-purple rounded-tl-md rounded-bl-[2rem] rounded-tr-[2rem] rounded-br-md">
            <div className="flex items-center gap-3">
              <div className="bg-product-purple flex items-center p-2 w-8 h-8 rounded-full">
                <MapPin fill="#FFFFFF" color="#FFFFFF" className="w-4 h-4" />
              </div>
              <p className="flex flex-col font-Roboto_Regular text-textM text-base-text">
                Entrega em <b>Rua João Daniel Martinelli, 102</b>Farrapos -
                Porto Alegre, RS
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-product-yellow flex items-center p-2 w-8 h-8 rounded-full">
                <Timer color="#FFFFFF" className="w-4 h-4" />
              </div>
              <p className="flex flex-col font-Roboto_Regular text-textM text-base-text">
                Previsão de entrega <b>20 min - 30 min</b>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-product-yellow_dark flex items-center p-2 w-8 h-8 rounded-full">
                <DollarSign color="#FFFFFF" className="w-4 h-4" />
              </div>
              <p className="flex flex-col font-Roboto_Regular text-textM text-base-text">
                Pagamento na entrega <b>Cartão de Crédito</b>
              </p>
            </div>
          </article>
        </div>
        <img src={deliverymanImg} alt="Imagem de um entregador" />
      </section>
    </>
  );
}
