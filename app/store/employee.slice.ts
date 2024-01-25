import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import UseApi from "../helpers/apit";
import { Employee, EmployeeListDataResponse } from "../types/employee";
import { PAGE_SIZE } from "../helpers/constants";

const initialState: {
  idLoaded: boolean;
  totalEmployees: number;
  currentPage: number;
  pagesCount: number;
  employeeList: Employee[];
} = {
  idLoaded: false,
  employeeList: [],
  totalEmployees: 0,
  currentPage: 0,
  pagesCount: 0,
};

const employeeListSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeList(state, action) {
      state.employeeList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getEmployeeListAsync.fulfilled,
      (state, action: PayloadAction<EmployeeListDataResponse>) => {
        if (action.payload.isSuccess) {
          state.idLoaded = true;
          state.currentPage = parseInt(action.payload.currentPage);
          state.pagesCount = action.payload.pagesCount;
          state.totalEmployees = parseInt(action.payload.count);
          state.employeeList = action.payload.employees;
        } else {
          state.idLoaded = false;
          state.employeeList = [];
          state.currentPage = 0;
          state.pagesCount = 0;
          state.totalEmployees = 0;
        }
      }
    );
    builder.addCase(
      deleteEmployeeAsync.fulfilled,
      (state, action: PayloadAction<EmployeeListDataResponse>) => {
        if (action.payload.isSuccess) {
          state.idLoaded = true;
          state.currentPage = parseInt(action.payload.currentPage);
          state.pagesCount = action.payload.pagesCount;
          state.totalEmployees = parseInt(action.payload.count);
          state.employeeList = action.payload.employees;
        } else {
          state.idLoaded = false;
          state.employeeList = [];
          state.currentPage = 0;
          state.pagesCount = 0;
          state.totalEmployees = 0;
        }
      }
    );
  },
});

export const getEmployeeListAsync = createAsyncThunk(
  "employee/getEmployeeListAsync",
  async (pageData: {
    page: number;
    pageSize?: number;
    searchTerm?: string;
  }) => {
    let searchData = pageData.searchTerm || "";
    if (pageData.pageSize) {
      const response = await UseApi().fetch<EmployeeListDataResponse>(
        `employee/list?pageSize=${pageData.pageSize}&page=${pageData.page}&searchTerm=${searchData}`,
        "GET"
      );
      return response;
    } else {
      const response = await UseApi().fetch<EmployeeListDataResponse>(
        `employee/list?page=${pageData.page}&searchTerm=${searchData}`,
        "GET"
      );
      return response;
    }
  }
);

export const deleteEmployeeAsync = createAsyncThunk(
  "employee/deleteEmployeeAsync",
  async (id: number | string) => {
    await UseApi().fetch(`employee/${id}`, "DELETE");
    const response = await UseApi().fetch<EmployeeListDataResponse>(
      `employee/list?pageSize=${PAGE_SIZE}&page=1`,
      "GET"
    );
    return response;
  }
);

export const { setEmployeeList } = employeeListSlice.actions;
export default employeeListSlice.reducer;
