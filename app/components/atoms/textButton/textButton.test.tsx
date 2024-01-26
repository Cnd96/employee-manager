import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TextButton from "./textButton";

describe("Text Button test", () => {
  it("Renders text Button correctly", () => {
    render(<TextButton background="red" text="Add" onClick={() => {}} />);
    const buttonElement = screen.getByText("Add");
    expect(buttonElement).toBeInTheDocument();
  });
});
