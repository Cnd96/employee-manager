import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TestButton from "./testBtn";

describe("H1", () => {

  it("renders.", () => {
    render(<TestButton text="Hello" />);
    screen.debug();

    // Your assertions go here
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
