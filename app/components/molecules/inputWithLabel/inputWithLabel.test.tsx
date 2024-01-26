import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import InputWithLabel from "./inputWithLabel";

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'), 
  useForm: jest.fn(),
}));

describe("Input Label test", () => {
  const mockUseForm = {
    register: jest.fn(),
    handleSubmit: jest.fn(),
    control: {} as any,
    formState: {} as any,
  };

  (useForm as jest.Mock).mockReturnValue(mockUseForm);
  it("Renders input label", () => {
    render(
      <FormProvider {...useForm()}>
        <InputWithLabel
          title="First name"
          name="first_name"
          error={undefined}
        />
      </FormProvider>
    );
    const firstNameElement = screen.getByText("First name");
    expect(firstNameElement).toBeInTheDocument();
  });

  it("Renders error text correclty", () => {
    render(
      <FormProvider {...useForm()}>
        <InputWithLabel
          title="Last name"
          name="last_name"
          error={
            "Last name must be 6-10 characters long and contain only alphabets"
          }
        />
      </FormProvider>
    );
    const errorElement = screen.getByText(
      "Last name must be 6-10 characters long and contain only alphabets"
    );
    expect(errorElement).toBeInTheDocument();
  });
  
});
