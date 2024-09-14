/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MapPinned } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";
import { CustomInput } from "../CustomInput";
import { useDebounceCep } from "../../utils/debounceCep";
import { useEffect, useState } from "react";
import { getAddressByCep } from "../../services/apis/get-address-by-cep";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

interface AddressProps {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  complemento?: string;
}

export const AddressForm = () => {
  const [cep, setCep] = useState<string>("");
  const [disableInputs, setDisableInputs] = useState<boolean>(false);

  const { register, control, setValue, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  const deBouncedCep = useDebounceCep(cep, 1000);

  useEffect(() => {
    async function getAddress() {
      try {
        const address: AddressProps = await getAddressByCep(cep);

        setValue("street", address.logradouro);
        setValue("district", address.bairro);
        setValue("city", address.localidade);
        setValue("uf", address.uf);
      } catch (error) {
        return;
      }
    }

    getAddress();
  }, [deBouncedCep]);

  return (
    <>
      <h1 className="mb-4 font-Baloo2_Bold text-titleXS sm:text-titleS">
        Complete seu pedido
      </h1>
      <section className="w-full max-w-[40rem] p-6 sm:p-10 rounded-md mb-4 bg-base-card shadow-md">
        <span className="flex gap-2 mb-8">
          <MapPinned color="#C47F17" className="w-5 h-5" />
          <span className="flex flex-col gap-[0.125rem]">
            <p className="font-Roboto_Regular text-textS sm:text-textM text-base-subtitle">
              Endereço de Entrega
            </p>
            <p className="font-Roboto_Regular text-textXS sm:text-textS text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </span>
        </span>
        <article className="grid grid-cols-1 gap-6 sm:gap-8">
          <div>
            <Controller
              name="cep"
              control={control}
              render={({ field: { value } }) => (
                <InputMask
                  maskChar=""
                  {...register("cep")}
                  mask="99999-999"
                  value={value ?? ""}
                  onChange={(event) => {
                    setCep(event.target.value);
                    setValue("cep", event.target.value);
                  }}
                >
                  {/* @ts-ignore */}
                  {() => (
                    <div>
                      <CustomInput
                        type="text"
                        placeholder="CEP"
                        className="w-full sm:w-fit"
                        {...register("cep")}
                        error={errors.cep?.message}
                        disabled={disableInputs}
                      />
                    </div>
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
            disabled={disableInputs}
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <CustomInput
              type="number"
              placeholder="Número"
              min={1}
              {...register("number")}
              error={errors.number?.message}
              disabled={disableInputs}
            />
            <div className="flex-1 bg-base-input">
              <CustomInput
                type="text"
                placeholder="Complemento"
                rightText="opcional"
                {...register("complement")}
                disabled={disableInputs}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="flex-1">
              <CustomInput
                type="text"
                placeholder="Bairro"
                {...register("district")}
                error={errors.district?.message}
                disabled={disableInputs}
              />
            </div>
            <div className="flex-1">
              <CustomInput
                type="text"
                placeholder="Cidade"
                {...register("city")}
                error={errors.city?.message}
                disabled={disableInputs}
              />
            </div>
            <CustomInput
              type="text"
              placeholder="UF"
              className="w-16"
              maxLength={2}
              {...register("uf")}
              error={errors.uf?.message}
              disabled={disableInputs}
            />
          </div>
        </article>
      </section>
    </>
  );
};
