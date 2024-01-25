import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddPage from "./page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
  }),
}));

describe("Add Page tests", () => {
  it("Renders and ADD text is there.", () => {
    const { getByPlaceholderText, getByText } = render(<AddPage />);
    // screen.debug();
    const firstNameInputField = getByPlaceholderText("First Name");
    const lastNameInputField = getByPlaceholderText("Last Name");
    const emailInputField = getByPlaceholderText("Email");
    const phoneInputField = getByPlaceholderText("Phone");
    const addButtonField = getByText("ADD");

    expect(addButtonField).toBeInTheDocument();
    expect(firstNameInputField).toBeInTheDocument();
    expect(lastNameInputField).toBeInTheDocument();
    expect(emailInputField).toBeInTheDocument();
    expect(phoneInputField).toBeInTheDocument();
  });

  it("Showing errors messages correctly part 1 (All fields empty)", async () => {
    const { getByPlaceholderText, getByText } = render(<AddPage />);

    const firstNameInputField = getByPlaceholderText("First Name");
    const lastNameInputField = getByPlaceholderText("Last Name");
    const emailInputField = getByPlaceholderText("Email");
    const phoneInputField = getByPlaceholderText("Phone");
    const addButtonField = getByText("ADD");
    fireEvent.change(firstNameInputField, { target: { value: "" } });
    fireEvent.change(lastNameInputField, { target: { value: "" } });
    fireEvent.change(emailInputField, { target: { value: "" } });
    fireEvent.change(phoneInputField, { target: { value: "" } });

    fireEvent.click(addButtonField);

    await waitFor(() => {
      expect(
        screen.getByText(
          "First name must be 6-10 characters long and contain only alphabets"
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          "Last name must be 6-10 characters long and contain only alphabets"
        )
      ).toBeInTheDocument();
      expect(screen.getByText("Email cannot be empty")).toBeInTheDocument();
      expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
    });
  });

  it("Showing errors messages correctly part 2 (First and last name correct and email, phone wrong)", async () => {
    const { getByPlaceholderText, getByText } = render(<AddPage />);

    const firstNameInputField = getByPlaceholderText("First Name");
    const lastNameInputField = getByPlaceholderText("Last Name");
    const emailInputField = getByPlaceholderText("Email");
    const phoneInputField = getByPlaceholderText("Phone");
    const addButtonField = getByText("ADD");
    fireEvent.change(firstNameInputField, { target: { value: "johnss" } });
    fireEvent.change(lastNameInputField, { target: { value: "Wttheee" } });
    fireEvent.change(emailInputField, { target: { value: "aaaa@..." } });
    fireEvent.change(phoneInputField, { target: { value: "09555555252" } });

    fireEvent.click(addButtonField);

    await waitFor(() => {
      expect(
        screen.queryByText(
          "First name must be 6-10 characters long and contain only alphabets"
        )
      ).toBeNull();
      expect(
        screen.queryByText(
          "Last name must be 6-10 characters long and contain only alphabets"
        )
      ).toBeNull();
      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
      expect(screen.getByText("Invalid phone number")).toBeInTheDocument();
    });
  });

  it("Showing no errors when correct inputs are provided", async () => {
    const { getByPlaceholderText, getByText } = render(<AddPage />);

    const firstNameInputField = getByPlaceholderText("First Name");
    const lastNameInputField = getByPlaceholderText("Last Name");
    const emailInputField = getByPlaceholderText("Email");
    const phoneInputField = getByPlaceholderText("Phone");
    const addButtonField = getByText("ADD");
    fireEvent.change(firstNameInputField, { target: { value: "johnss" } });
    fireEvent.change(lastNameInputField, { target: { value: "Wttheee" } });
    fireEvent.change(emailInputField, { target: { value: "aaaa@gmai.com" } });
    fireEvent.change(phoneInputField, { target: { value: "0777777777" } });

    fireEvent.click(addButtonField);

    await waitFor(() => {
      expect(
        screen.queryByText(
          "First name must be 6-10 characters long and contain only alphabets"
        )
      ).toBeNull();
      expect(
        screen.queryByText(
          "Last name must be 6-10 characters long and contain only alphabets"
        )
      ).toBeNull();
      expect(screen.queryByText("Invalid email address")).toBeNull();
      expect(screen.queryByText("Invalid phone number")).toBeNull();
    });
  });
});
