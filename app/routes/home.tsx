import Store from "~/components/views/Store";
import type { Route } from "./+types/home";
import Header from "~/components/header/Header";

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
      className={"h-screen w-screen flex-1 overflow-auto bg-green-800"}
    >
      <div className="hidden md:flex">
        <Header />
      </div>
      <Store />
    </main>
  );
}
