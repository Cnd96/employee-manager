import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TestButton from "./inputWithLabel";
import { useForm, FormProvider } from "react-hook-form";

describe("H1", () => {
  it("renders.", () => {
    const methods = useForm();
    render(
      <FormProvider {...methods}>
        <TestButton title="Hello" name="name" error="eee" />
      </FormProvider>
    );
    screen.debug();

    // Your assertions go here
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
