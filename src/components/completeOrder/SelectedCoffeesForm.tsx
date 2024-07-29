import { CoffeeItem } from "./CoffeeItem";

export const SelectedCoffeesForm = () => {
  return (
    <>
      <h1 className="mb-4 font-Baloo2_Bold text-titleXS">Cafés selecionados</h1>
      <section className="p-10 rounded-tl-md rounded-bl-[2.75rem] rounded-tr-[2.75rem] rounded-br-md mb-2 bg-base-card">
        <CoffeeItem />
      </section>
    </>
  );
};
