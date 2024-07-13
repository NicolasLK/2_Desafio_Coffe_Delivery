import { Header } from "../components/Header/Header";
import imgGiantCoffe from "/GiantCoffee.png";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full max-w-[70rem] mr-auto ml-auto">
        <section className="flex items-center gap-4 p-4 bg-custom-bg bg-center bg-repeat bg-cover w-full h-[34rem] shadow-sm">
          <article className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="font-Baloo2_ExtraBold text-titleXL text-base-title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="font-Roboto_Regular text-textL text-base-subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>
            <div>Items</div>
          </article>
          <img src={imgGiantCoffe} alt="Imagem de um copo de cafe" />
        </section>
      </main>
    </>
  );
};
