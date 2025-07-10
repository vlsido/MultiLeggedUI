import StoreBody from "~/components/Pages/Store/StoreBody/StoreBody";
import type { Route } from "./+types/store";
import Header from "~/components/Navigation/NavigationHeader/NavigationHeader";
import Navigation from "~/components/Navigation/NavigationFooter/NavigationFooter";
import Footer from "~/components/UI/Footer";

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
      className={"flex flex-col h-screen w-screen bg-green-800 "}
    >
      <div className="hidden md:flex">
        <Header />
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="flex flex-1 bg-[url(/Zuk8.png)] bg-left bg-size-[auto_750px] bg-local bg-repeat-y scale-x-[-1]">
          <div className="flex flex-1 bg-[url(/Zuk8.png)] bg-left bg-size-[auto_750px] bg-local bg-repeat-y scale-x-[-1]">
            <StoreBody />
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
