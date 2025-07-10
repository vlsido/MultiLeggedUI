import Header from "~/components/Navigation/NavigationHeader/NavigationHeader";
import type { Route } from "./+types/contact";
import Navigation from "~/components/Navigation/NavigationFooter/NavigationFooter";
import ContactBody from "~/components/Pages/Contact/ContactBody/ContactBody";
import Footer from "~/components/UI/Footer";

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
        <div className="flex flex-1 bg-[url(/Zuk8.png)] bg-left bg-size-[auto_750px] bg-local bg-repeat-y scale-x-[-1]">
          <div className="flex flex-1 bg-[url(/Zuk8.png)] bg-left bg-size-[auto_750px] bg-local bg-repeat-y scale-x-[-1]">
            <ContactBody />
          </div>
        </div>
      </div>
      <Footer />
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}
