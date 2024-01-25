import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { AppDispatch, RootState } from "@/app/store";
import { FEMALE, MALE, PAGE_SIZE } from "@/app/helpers/constants";
import {
  deleteEmployeeAsync,
  getEmployeeListAsync,
} from "@/app/store/employee.slice";
import Loading from "../../atoms/spinner";
import EmployeePagination from "../pagination/pagination";
import IconButton from "../../atoms/iconButton.tsx/iconButton";
import DeleteSvg from "@/public/images/Delete.svg";
import theme from "@/app/styles/theme";

const StyledDataGrid = styled(DataGrid)(() => ({
  "& .MuiDataGrid-cell": {
    borderRight: `1px solid #138808`,
    borderBottom: `1px solid #138808`,
  },
  "& .MuiDataGrid-cell:first-child": {
    borderLeft: `1px solid #138808`,
  },
  "& .MuiDataGrid-columnHeader": {
    borderRight: `1px solid #138808`,
    backgroundColor: `#4CBB17`,
    color: `#ffffff`,
  },
}));

export default function EmployeesList() {
  const dispatch = useDispatch<AppDispatch>();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });
  const employee = useSelector((state: RootState) => state.employee);

  const columns: GridColDef[] = [
    {
      field: "photo",
      headerName: "Image",
      renderCell: (params) =>
        params.value ? (
          <img src={params.value} style={{ width: "70%", margin: "auto" }} />
        ) : (
          <></>
        ),
      width: 80,
      align: "left",
    },
    {
      field: "first_name",
      headerName: "First name",
      flex: 1,
      align: "left",
    },
    {
      field: "last_name",
      headerName: "Last name",
      flex: 1,
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      align: "left",
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 70,
      renderCell: (params) =>
        params.value == "M" ? <>{MALE}</> : <>{FEMALE}</>,
      align: "left",
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      sortable: false,

      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link href={`/employee/edit/${params.id}`}>
              <Button
                variant="contained"
                // TODO styles
                style={{
                  background: "#808080",
                  textTransform: "none",
                  height: "30px",
                  marginRight: "5px",
                }}
                size="small"
              >
                Edit
              </Button>
            </Link>
            <IconButton
              src={DeleteSvg}
              background={theme.red}
              onClick={() => dispatch(deleteEmployeeAsync(params.id))}
            ></IconButton>
          </div>
        );
      },
    },
  ];
  return (
    <>
      {employee.idLoaded ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <StyledDataGrid
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            slots={{
              pagination: () => (
                <EmployeePagination
                  page={employee.currentPage}
                  pageSize={PAGE_SIZE}
                  onChangePage={(n) =>
                    dispatch(
                      getEmployeeListAsync({ page: n, pageSize: PAGE_SIZE })
                    )
                  }
                  count={employee.totalEmployees}
                />
              ),
            }}
            pageSizeOptions={[]}
            rows={employee.employeeList}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
