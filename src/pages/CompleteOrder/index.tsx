import { CoffeesForm } from "../../components/completeOrder/CoffeesForm";

export default function CompleteOrder() {
  return (
    <>
      <section className="flex items-center justify-center w-full h-full mt-10">
        <article className="flex items-center justify-around w-full">
          <CoffeesForm />
        </article>
      </section>
    </>
  );
}
