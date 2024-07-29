import { MapPinned } from "lucide-react";

export const AddressForm = () => {
  return (
    <>
      <h1 className="mb-4 font-Baloo2_Bold text-titleXS">
        Complete seu pedido
      </h1>
      <section className="p-10 rounded-md mb-2 bg-base-card">
        <span className="flex gap-2 mb-8">
          <MapPinned color="#C47F17" className="w-5 h-5" />
          <span className="flex flex-col gap-[0.125rem]">
            <p className="font-Roboto_Regular text-textM text-base-subtitle">
              Endereço de Entrega
            </p>
            <p className="font-Roboto_Regular text-textS text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </span>
        </span>
        <article className="grid grid-cols-1 gap-8 w-full">
          <div>
            <input
              type="text"
              placeholder="CEP"
              className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
            />
          </div>
          <input
            type="text"
            placeholder="Rua"
            className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
          />
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Número"
              className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
            />
            <div className="flex items-center gap-1 flex-1 bg-base-input shadow-sm">
              <input
                type="text"
                placeholder="Complemento"
                className="p-3 rounded bg-base-input text-base-label w-full font-Roboto_Regular text-textS border border-r-0"
              />
              <p className="font-Roboto_Regular text-textXS text-center italic capitalize text-base-label h-full p-3 rounded border border-l-0">
                opcional
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Bairro"
              className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
            />
            <input
              type="text"
              placeholder="Cidade"
              className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
            />
            <input
              type="text"
              placeholder="UF"
              className="p-3 rounded bg-base-input text-base-label font-Roboto_Regular text-textS border shadow-sm"
            />
          </div>
        </article>
      </section>
    </>
  );
};
