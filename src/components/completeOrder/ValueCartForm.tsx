import { useCartContext } from "../../hooks/useCartContext";
import { formatMoney } from "../../utils/formatMoney";

export const ValueCartForm = () => {
  const { totalValueCartItems } = useCartContext();

  const deliveryFee = 3.5;

  const totalCartPrice = deliveryFee + totalValueCartItems;

  const deliveryFeeFormatted = formatMoney(deliveryFee);
  const totalValueCartItemsFormatted = formatMoney(totalValueCartItems);
  const totalCartPriceFormatted = formatMoney(totalCartPrice);

  return (
    <>
      <span className="flex items-center justify-between mt-2">
        <p className="font-Roboto_Regular text-textS text-base-text">
          Total de itens
        </p>
        <p className="font-Roboto_Regular text-textM text-base-text">
          R$ {totalValueCartItemsFormatted}
        </p>
      </span>
      <span className="flex items-center justify-between">
        <p className="capitalize font-Roboto_Regular text-textS text-base-text">
          entrega
        </p>
        <p className="font-Roboto_Regular text-textM text-base-text">
          R$ {deliveryFeeFormatted}
        </p>
      </span>
      <span className="flex items-center justify-between">
        <p className="capitalize font-Roboto_Bold text-textL text-base-text">
          total
        </p>
        <p className="font-Roboto_Bold text-textL text-base-text">
          R$ {totalCartPriceFormatted}
        </p>
      </span>
    </>
  );
};
