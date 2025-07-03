import Header from "~/components/Navigation/NavigationHeader/NavigationHeader";
import type { Route } from "./+types/privacy";
import Navigation from "~/components/Navigation/NavigationFooter/NavigationFooter";
import PrivacyPolicy from "~/components/Pages/Privacy/PrivacyPolicy";

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
      data-testid="PRIVACY.MAIN_CONTAINER:VIEW"
      aria-label="Privacy page"
      className={"flex flex-col h-screen w-screen bg-green-800"}
    >
      <div className="hidden md:flex">
        <Header />
      </div>
      <PrivacyPolicy />
      <div className="md:hidden flex">
        <Navigation />
      </div>
    </main>
  );
}
