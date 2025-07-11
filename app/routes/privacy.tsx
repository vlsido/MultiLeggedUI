import Header from "~/components/Navigation/NavigationHeader/NavigationHeader";
import type { Route } from "./+types/privacy";
import Navigation from "~/components/Navigation/NavigationFooter/NavigationFooter";
import PrivacyPolicyBody from "~/components/Pages/Privacy/PrivacyBody";
import Footer from "~/components/UI/Footer";
import Background from "~/components/UI/Background";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy - MultiLegged" },
    {
      name: "description",
      content: "Welcome to the MultiLegged Shopping Cart!",
    },
  ];
}

export default function Privacy({ loaderData }: Route.ComponentProps) {
  return (
    <main
      aria-label="Privacy page"
      className={"flex flex-col h-screen w-screen bg-green-800"}
    >
      <div className="hidden md:flex">
        <Header />
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto">
        <Background>
          <PrivacyPolicyBody />
        </Background>
      </div>
      <Footer />
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}
