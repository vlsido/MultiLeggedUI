import "@testing-library/jest-dom";
import ShoppingCart from "./CartBody";
import { render, screen } from "~/utils/test-utils";

describe("Shopping cart", () => {
  test("Shopping cart view renders empty cart message", () => {
    render(<ShoppingCart />, {
      preloadedState: {
        cart: { cartItems: [] },
        products: { categoriesProducts: [] },
      },
    });

    expect(screen.getByText("Cart is empty!")).toBeInTheDocument();
  });
});
