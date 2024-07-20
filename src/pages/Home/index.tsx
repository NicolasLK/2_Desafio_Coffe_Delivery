import { Intro } from "../../components/home/Intro";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center gap-8 p-4 w-full shadow-sm">
        <Intro />
        <article className="flex flex-col items-center w-full">
          <div className="w-full max-w-[70rem] mr-auto ml-auto">
            <h2 className="font-Baloo2_ExtraBold text-titleL mb-14">Nossos cafés</h2>
            <p>Coffees</p>
          </div>
        </article>
      </section>
    </>
  );
}
