import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import EmployeeCard from "./employeeCard";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { FEMALE, MALE } from "@/app/helpers/constants";

describe("Employee card test", () => {
  it("Renders Employee card", () => {
    render(
      <Provider store={store}>
        <EmployeeCard
          id={1}
          name="Chamal"
          email="Demel"
          phone="0789524545"
          gender="M"
          imageSrc=""
        />
      </Provider>
    );
    const firstNameElement = screen.getByText("Chamal");
    expect(firstNameElement).toBeInTheDocument();
  });

  it("Renders gender(Male) correctly", () => {
    render(
      <Provider store={store}>
        <EmployeeCard
          id={1}
          name="Chamal"
          email="Demel"
          phone="0789524545"
          gender="M"
          imageSrc=""
        />
      </Provider>
    );
    const firstNameElement = screen.getByText(MALE);
    expect(firstNameElement).toBeInTheDocument();
  });

  it("Renders gender(Female) correctly", () => {
    render(
      <Provider store={store}>
        <EmployeeCard
          id={1}
          name="Chamal"
          email="Demel"
          phone="0789524545"
          gender="F"
          imageSrc=""
        />
      </Provider>
    );
    const firstNameElement = screen.getByText(FEMALE);
    expect(firstNameElement).toBeInTheDocument();
  });
});
