/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MapPinned } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";
import { CustomInput } from "../CustomInput";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export const AddressForm = () => {
  const { register, control, setValue, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <>
      <h1 className="mb-4 font-Baloo2_Bold text-titleXS">
        Complete seu pedido
      </h1>
      <section className="p-10 rounded-md mb-2 bg-base-card max-w-[40rem]">
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
        <article className="grid grid-cols-1 gap-8">
          <div>
            <Controller
              name="cep"
              control={control}
              render={({ field: { value, onChange } }) => (
                <InputMask
                  maskChar=""
                  {...register("cep")}
                  mask="99999-999"
                  value={value ?? ""}
                  onChange={onChange}
                >
                  {/* @ts-ignore */}
                  {() => (
                    <CustomInput
                      type="text"
                      placeholder="CEP"
                      className="w-fit"
                      {...register("cep")}
                      error={errors.cep?.message}
                    />
                  )}
                </InputMask>
              )}
            />
          </div>
          <CustomInput
            type="text"
            placeholder="Rua"
            {...register("street")}
            error={errors.street?.message}
          />
          <div className="flex gap-4">
            <CustomInput
              type="number"
              placeholder="Número"
              min={1}
              {...register("number")}
              error={errors.number?.message}
            />
            <div className="flex-1 bg-base-input">
              <CustomInput
                type="text"
                placeholder="Complemento"
                rightText="opcional"
                {...register("complement")}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CustomInput
              type="text"
              placeholder="Bairro"
              {...register("district")}
              error={errors.district?.message}
            />
            <div className="flex-1">
              <CustomInput
                type="text"
                placeholder="Cidade"
                {...register("city")}
                error={errors.city?.message}
              />
            </div>
            <CustomInput
              type="text"
              placeholder="UF"
              className="max-w-16 ml-auto mr-0"
              maxLength={2}
              {...register("uf")}
              error={errors.uf?.message}
            />
          </div>
        </article>
      </section>
    </>
  );
};
