import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import employeeListReducer from "@/app/store/employee.slice";
import EmployeesList from "./employeesList";
import { Employee } from "@/app/types/employee";

describe("Employee list test", () => {
  it("Renders spinner when the store is empty", () => {
    render(
      <Provider store={store}>
        <EmployeesList searchValue="" />
      </Provider>
    );
    const spinnerElement = screen.getByRole("progressbar");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("Render table with when the store has employees", () => {
    const initialState2: {
      idLoaded: boolean;
      totalEmployees: number;
      currentPage: number;
      pagesCount: number;
      employeeList: Employee[];
    } = {
      idLoaded: true,
      pagesCount: 1,
      currentPage: 1,
      employeeList: [
        {
          first_name: "Henri",
          last_name: "Rodriguez",
          email: "Darrin_Rippin@gmail.com",
          phone: "+94771277218",
          gender: "M",
          id: 1,
          photo: "https://randomuser.me/api/portraits/men/92.jpg",
        },
        {
          first_name: "Lindsay",
          last_name: "Herman",
          email: "Ewald.Kunde@gmail.com",
          phone: "+94771274218",
          gender: "F",
          id: 2,
          photo: "https://randomuser.me/api/portraits/men/30.jpg",
        },
        {
          first_name: "Gerda",
          last_name: "Trantow",
          email: "Mauricio.Stehr@yahoo.com",
          phone: "+94771277681",
          gender: "M",
          id: 3,
          photo: "https://randomuser.me/api/portraits/men/85.jpg",
        },
        {
          first_name: "Skye",
          last_name: "Rolfson",
          email: "Angelita_Simonis@hotmail.com",
          phone: "+94771277689",
          gender: "F",
          id: 4,
          photo: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
          first_name: "Simeon",
          last_name: "Russel",
          email: "Fabiola_Heidenreich@yahoo.com",
          phone: "+94771277682",
          gender: "M",
          id: 5,
          photo: "https://randomuser.me/api/portraits/men/81.jpg",
        },
      ],
      totalEmployees: 5,
    };
    const store2 = configureStore({
      reducer: {
        employee: employeeListReducer,
      },
      preloadedState: {
        employee: initialState2,
      },
    });
    render(
      <Provider store={store2}>
        <EmployeesList searchValue="" />
      </Provider>
    );
     const tableElement = screen.getByRole("grid");
     const person = screen.getByText("Henri");
     expect(tableElement).toBeInTheDocument();
     expect(person).toBeInTheDocument();
  });
});
