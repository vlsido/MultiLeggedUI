import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(
    "cart",
    "routes/cart.tsx"
  ),
  route(
    "privacy",
    "routes/privacy.tsx"
  ),
  route(
    "contact",
    "routes/contact.tsx"
  )
] satisfies RouteConfig;
