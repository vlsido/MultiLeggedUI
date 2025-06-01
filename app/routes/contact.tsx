import Header from "~/components/views/Header";
import type { Route } from "./+types/contact";
import Navigation from "~/components/views/Navigation";
import ShoppingCart from "~/components/views/ShoppingCart";
import Footer from "~/components/views/Footer";
import ContactBody from "~/components/views/ContactBody";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Contact - MultiLegged" },
    { name: "description", content: "Welcome to the MultiLegged Shopping Cart!" },
  ];
}

export default function Contact({
  loaderData,
}: Route.ComponentProps) {
  return (
    <main
      data-testid="CONTACT.MAIN_CONTAINER:VIEW"
      aria-label="Contact page"
      className={"flex flex-col h-screen w-screen bg-green-800"}
    >
      <div className="hidden md:flex">
        <Header />
      </div>
      <ContactBody />
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}

