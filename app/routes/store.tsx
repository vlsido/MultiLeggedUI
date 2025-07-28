import type { Route } from "./+types/store";
import Header from "~/components/Navigation/NavigationHeader/NavigationHeader";
import Navigation from "~/components/Navigation/NavigationFooter/NavigationFooter";
import Footer from "~/components/UI/Footer";
import Background from "~/components/UI/Background";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Store - MultiLegged" },
    { name: "description", content: "Welcome to the MultiLegged Store!" },
  ];
}

export default function Store({ params }: Route.LoaderArgs) {
  return (
    <main
      aria-label="Home page"
      className={"flex flex-col h-screen w-screen bg-green-800 "}
    >
      <div className="hidden md:flex">
        <Header />
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <Background>
          <Outlet />
        </Background>
        <Footer />
      </div>
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}
