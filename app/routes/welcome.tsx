import type { Route } from "./+types/store";
import Header from "~/components/Navigation/NavigationHeader/NavigationHeader";
import Navigation from "~/components/Navigation/NavigationFooter/NavigationFooter";
import WelcomeBody from "~/components/Pages/Welcome/WelcomeBody";
import Footer from "~/components/UI/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome - MultiLegged" },
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
      <WelcomeBody />
      <Footer />
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}
