import StoreBody from "~/components/Pages/Store/StoreBody/StoreBody";
import type { Route } from "./+types/store";
import Header from "~/components/Navigation/NavigationHeader/NavigationHeader";
import Navigation from "~/components/Navigation/NavigationFooter/NavigationFooter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Store - MultiLegged" },
    { name: "description", content: "Welcome to the MultiLegged Store!" },
  ];
}

export default function Store() {
  return (
    <main
      aria-label="Home page"
      className={"flex flex-col h-screen w-screen bg-green-800"}
    >
      <div className="hidden md:flex">
        <Header />
      </div>
      <StoreBody />
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}
