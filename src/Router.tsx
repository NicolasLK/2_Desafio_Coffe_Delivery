import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import Home from "./pages/Home";
import CompleteOrder from "./pages/CompleteOrder";
import ConfirmedOrder from "./pages/ConfirmedOrder";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/carrinho" element={<CompleteOrder />} />
          <Route path="/pedido_enviado" element={<ConfirmedOrder />} />
        </Route>
      </Routes>
    </>
  );
}
