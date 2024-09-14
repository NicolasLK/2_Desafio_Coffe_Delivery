import { coffees } from "../../data/Coffees";
import { CoffeeCard } from "./CoffeeCard";

export const CoffeeList = () => {
  return (
    <>
      <article className="flex flex-col w-full max-w-[70rem] mr-auto ml-auto">
        <h2 className="font-Baloo2_ExtraBold text-titleL mb-[3.5rem]">
          Nossos cafés
        </h2>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 w-full mt-[3.5rem]">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </article>
    </>
  );
};
