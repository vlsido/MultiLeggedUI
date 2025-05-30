import Header from "~/components/views/Header";
import type { Route } from "./+types/cart";
import Navigation from "~/components/views/Navigation";
import ShoppingCart from "~/components/views/ShoppingCart";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Cart - MultiLegged" },
    { name: "description", content: "Welcome to the MultiLegged Shopping Cart!" },
  ];
}

export default function Cart({
  loaderData,
}: Route.ComponentProps) {
  return (
    <main
      data-testid="CART.MAIN_CONTAINER:VIEW"
      aria-label="Home page"
      className={"flex flex-col h-screen w-screen bg-green-800"}
    >
      <div className="hidden md:flex">
        <Header />
      </div>
      <ShoppingCart />
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}

