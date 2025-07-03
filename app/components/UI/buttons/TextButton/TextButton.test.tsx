import { render, screen } from "~/utils/test-utils";
import TextButton from "./TextButton";
import "@testing-library/jest-dom";

describe("TextButton", () => {
  const mockFn = jest.fn();
  test("Button renders correctly", () => {
    render(<TextButton text="Test" onPress={mockFn} ariaLabel="Test button" />);

    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  test("Button is disabled if 'disabled' prop is set to 'true'", () => {
    render(
      <TextButton
        text="Test"
        onPress={mockFn}
        disabled={true}
        ariaLabel="Test button"
      />,
    );

    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("Button renders with custom background color and text", () => {
    const text = "Colored Button";

    render(
      <TextButton
        text={text}
        onPress={mockFn}
        ariaLabel="Colored button"
        containerClassName="bg-[red]"
      />,
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass("bg-[red]");

    expect(button).toHaveTextContent(text);
  });
});
