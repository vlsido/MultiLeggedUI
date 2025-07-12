import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/welcome.tsx"),
  route("store", "routes/store.tsx", [
    index("routes/store/index.tsx"),
    route("category/:categoryId", "routes/store/category.tsx"),
    route("product/:productId", "routes/store/product.tsx"),
  ]),
  route("cart", "routes/cart.tsx", [
    index("routes/cart/index.tsx"),
    route("shipping", "routes/cart/shipping.tsx"),
    route("checkout", "routes/cart/checkout.tsx"),
    route("return", "routes/cart/return.tsx"),
  ]),
  route("privacy", "routes/privacy.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
