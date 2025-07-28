import Header from "~/components/Navigation/NavigationHeader/NavigationHeader";
import type { Route } from "./+types/contact";
import Navigation from "~/components/Navigation/NavigationFooter/NavigationFooter";
import ContactBody from "~/components/Pages/Contact/ContactBody/ContactBody";
import Footer from "~/components/UI/Footer";
import Background from "~/components/UI/Background";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - MultiLegged" },
    {
      name: "description",
      content: "Welcome to the MultiLegged Shopping Cart!",
    },
  ];
}

export default function Contact({ loaderData }: Route.ComponentProps) {
  return (
    <main
      aria-label="Contact page"
      className={"flex flex-col h-screen w-screen bg-green-800"}
    >
      <div className="hidden md:flex">
        <Header />
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto">
        <Background>
          <ContactBody />
        </Background>
        <Footer />
      </div>
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}
