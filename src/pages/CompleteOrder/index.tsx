import { MapPinned } from "lucide-react";

export default function CompleteOrder() {
  return (
    <>
      <section className="flex items-center justify-center w-full h-full mt-10">
        <article className="flex items-center justify-around w-full">
          <form className="flex gap-20 w-full max-w-[70rem] mr-auto ml-auto">
            <div className="">
              <h1 className="mb-4">Complete seu pedido</h1>
              <div className="p-10 rounded-md mb-2 border-2">
                <span className="flex gap-2 mb-8">
                  <MapPinned />
                  <span className="flex flex-col gap-[0.125rem]">
                    <p>Endereço de Entrega</p>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </span>
                </span>
                <div className="grid grid-cols-1 gap-8 w-full">
                  <div>
                    <input type="text" className="border-2" />
                  </div>
                  <input type="text" className="border-2" />
                  <div className="flex gap-4">
                    <input type="text" className="border-2" />
                    <div className="flex">
                      <input type="text" className="border-2" />
                      <p>opcional</p>
                    </div>
                  </div>
                  <div>
                    <input type="text" className="border-2" />
                    <input type="text" className="border-2" />
                    <input type="text" className="border-2" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="mb-4">Complete seu pedido</h1>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}
