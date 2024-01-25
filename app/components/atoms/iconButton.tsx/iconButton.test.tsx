import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import IconButton from "./iconButton";

describe("Icon Button test", () => {
  it("Renders button color correctly", () => {
    render(<IconButton background="red" src="" />);
    const buttonElement = screen.getByTestId("IconButtonId");
    // screen.debug();
    const buttonStyle = window.getComputedStyle(buttonElement);
    expect(buttonStyle.backgroundColor).toBe("red");
  });
  it("Renders button color correctly", () => {
    render(<IconButton background="red" src="" />);
    const buttonElement = screen.getByTestId("IconButtonId");
    const buttonStyle = window.getComputedStyle(buttonElement);
    expect(buttonStyle.backgroundColor).not.toBe("blue");
  });
});
