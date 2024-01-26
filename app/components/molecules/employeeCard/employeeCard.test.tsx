import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import EmployeeCard from "./employeeCard";
import { Provider } from "react-redux";
import { store } from "@/app/store";

describe("Employee card test", () => {
  it("Renders Employee card", () => {
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
    screen.debug()
  });
});
