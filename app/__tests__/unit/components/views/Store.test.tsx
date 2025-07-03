import "@testing-library/jest-dom";
import Store from "~/components/views/Store";
import { render, screen } from "~/utils/test-utils";

describe("Store", () => {
  test("Store view renders correctly", () => {
    render(<Store />);
    expect(screen.getByTestId("STORE.CONTAINER:VIEW")).toBeInTheDocument();

    expect(screen.getByTestId("STORE.CONTAINER:VIEW")).toBeInTheDocument();
  });
});
