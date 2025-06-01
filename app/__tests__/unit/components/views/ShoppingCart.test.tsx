import "@testing-library/jest-dom";
import ShoppingCart from "~/components/views/ShoppingCart";
import { render, screen } from "~/utils/test-utils";

describe(
  "Shopping cart",
  () => {
    test(
      "Shopping cart view renders correctly",
      () => {
        render(<ShoppingCart />);

        expect(screen.getByTestId("SHOPPING_CART.CONTAINER:VIEW")).toBeInTheDocument();
      }
    );
  }
);
