import Store from "~/components/views/Store";
import type { Route } from "./+types/home";
import Header from "~/components/views/Header";
import Navigation from "~/components/views/Navigation";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Multi Legged Store" },
    { name: "description", content: "Welcome to the MultiLegged Store!" },
  ];
}

export default function Home() {
  return (
    <main
      data-testid="HOME.MAIN_CONTAINER:VIEW"
      aria-label="Home page"
      className={"flex flex-col h-screen w-screen bg-green-800"}
    >
      <div className="hidden md:flex">
        <Header />
      </div>
      <Store />
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}
