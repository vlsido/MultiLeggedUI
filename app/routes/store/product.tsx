import ProductBody from "~/components/Pages/Store/Product/ProductBody/ProductBody";
import type { Route } from "./+types";

export default function ProductBodyWrapper(props: Route.LoaderArgs) {
  return <ProductBody {...props} />;
}
