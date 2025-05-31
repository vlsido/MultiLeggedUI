import "@testing-library/jest-dom";
import ShoppingCart from "~/components/views/ShoppingCart";
import { render, screen } from "~/utils/test-utils";

describe(
  "Shopping cart",
  () => {
    test(
      "Shopping cart view renders correctly",
      async () => {
        render(<ShoppingCart />);

        await screen.findByTestId("SHOPPING_CART.CONTAINER:VIEW");
      }
    );


  }
);
