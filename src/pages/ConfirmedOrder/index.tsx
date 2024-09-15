import { DollarSign, MapPin, Timer } from "lucide-react";
import deliverymanImg from "../../assets/Motorciclye.png";
import { OrderInfo } from "../../components/confirmedOrder/OrderInfo";
import { OrderData } from "../../components/completeOrder/CoffeesForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { paymentMethods } from "../../components/completeOrder/PaymentMethods";

interface LocationType {
  state: OrderData;
}

export default function ConfirmedOrder() {
  const location = useLocation() as unknown as LocationType;

  const state = location?.state;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <section className="w-full max-w-[70rem] h-[34rem] flex items-center justify-center gap-16 mr-auto ml-auto pt-32">
        <div className="flex flex-col gap-10 px-2">
          <span>
            <h1 className="font-Baloo2_ExtraBold text-titleL text-product-yellow_dark">
              Uhu! Pedido confirmado
            </h1>
            <p className="font-Roboto_Regular text-textL text-base-text">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </span>
          <article className="flex flex-col gap-8 p-10 border border-l-product-yellow border-t-product-yellow border-r-product-purple border-b-product-purple rounded-tl-md rounded-bl-[2rem] rounded-tr-[2rem] rounded-br-md">
            <OrderInfo
              className="bg-product-purple"
              icon={
                <MapPin fill="#FFFFFF" color="#FFFFFF" className="w-4 h-4" />
              }
              text={
                <>
                  Entrega em <strong>{state.street}</strong>, {state.number}
                  <br />
                  {state.district} - {state.city}, {state.uf}
                </>
              }
            />
            <OrderInfo
              className="bg-product-yellow"
              icon={<Timer color="#FFFFFF" className="w-4 h-4" />}
              text={
                <>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </>
              }
            />
            <OrderInfo
              className="bg-product-yellow_dark "
              icon={<DollarSign color="#FFFFFF" className="w-4 h-4" />}
              text={
                <>
                  Pagamento na entrega{" "}
                  <strong>{paymentMethods[state.paymentMethod].label}.</strong>
                </>
              }
            />
          </article>
        </div>
        <img
          src={deliverymanImg}
          alt="Imagem de um entregador"
          className="hidden lg:block lg:w-1/3"
        />
      </section>
    </>
  );
}
