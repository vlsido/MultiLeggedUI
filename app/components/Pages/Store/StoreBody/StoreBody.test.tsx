import "@testing-library/jest-dom";
import StoreBody from "./StoreBody";
import { render, screen } from "~/utils/test-utils";

describe("Store", () => {
  test("Store view renders correctly", () => {
    render(<StoreBody />);
    expect(screen.getByTestId("STORE.CONTAINER:VIEW")).toBeInTheDocument();

    expect(screen.getByTestId("STORE.CONTAINER:VIEW")).toBeInTheDocument();
  });
});
