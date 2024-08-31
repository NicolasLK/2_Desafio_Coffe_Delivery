import {
  CircleDollarSign,
  CreditCard,
  Landmark,
} from "lucide-react";

export const paymentMethods = {
  credit: {
    label: "cartão de crédito",
    icon: <CreditCard color="#8047F8" size={16} />,
  },
  debit: {
    label: "cartão de débito",
    icon: <Landmark color="#8047F8" size={16} />,
  },
  money: {
    label: "dinheiro",
    icon: <CircleDollarSign color="#8047F8" size={16} />,
  },
};
