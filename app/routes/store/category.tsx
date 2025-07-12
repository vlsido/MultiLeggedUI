import CategoryBody from "~/components/Pages/Store/Category/CategoryBody/CategoryBody";
import type { Route } from "./+types";

export default function CategoryBodyWrapper(props: Route.LoaderArgs) {
  return <CategoryBody {...props} />;
}
