import { CoffeeList } from "../../components/home/CoffeeList";
import { Intro } from "../../components/home/Intro";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-8 p-4 w-full shadow-sm">
        <Intro />
        <CoffeeList />
      </section>
    </>
  );
}
