import type { Route } from "./+types/cart";
import { Outlet } from "react-router";
import Header from "~/components/Navigation/NavigationHeader/NavigationHeader";
import Navigation from "~/components/Navigation/NavigationFooter/NavigationFooter";
import Footer from "~/components/UI/Footer";
import Background from "~/components/UI/Background";

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
      aria-label="Cart page"
      className={"flex flex-col h-screen w-screen bg-green-800"}
    >
      <div className="hidden md:flex">
        <Header />
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <Background>
          <Outlet />
        </Background>
      </div>
      <Footer />
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}
