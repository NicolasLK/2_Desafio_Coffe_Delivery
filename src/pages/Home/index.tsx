import imgGiantCoffe from "/GiantCoffee.png";

export default function Home() {
  return (
    <>
      <section className="flex items-center gap-4 p-4 bg-custom-bg bg-center bg-repeat bg-cover w-full h-[34rem] shadow-sm">
        <article className="w-full max-w-[70rem] flex items-center justify-between gap-14 mr-auto ml-auto">
          <div className="flex flex-col gap-4">
            <h1 className="font-Baloo2_ExtraBold text-titleXL text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="font-Roboto_Regular text-textL text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <img src={imgGiantCoffe} alt="Imagem de um copo de cafe" />
        </article>
      </section>
    </>
  );
}
