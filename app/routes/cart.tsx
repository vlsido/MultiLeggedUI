import Header from "~/components/Navigation/NavigationHeader";
import type { Route } from "./+types/cart";
import Navigation from "~/components/Navigation/NavigationFooter";
import ShoppingCart from "~/components/Pages/Cart/ShoppingCart/ShoppingCart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart - MultiLegged" },
    {
      name: "description",
      content: "Welcome to the MultiLegged Shopping Cart!",
    },
  ];
}

export default function Cart({ loaderData }: Route.ComponentProps) {
  return (
    <main
      data-testid="CART.MAIN_CONTAINER:VIEW"
      aria-label="Cart page"
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
