import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

type onChangePageHandler = (studentId: number) => void;

export type EmployeePaginationProps = {
  page: number;
  pageSize: number;
  count: number;
  onChangePage: onChangePageHandler;
};

export default function EmployeePagination({
  page,
  pageSize,
  count,
  onChangePage,
}: EmployeePaginationProps) {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    onChangePage(newPage + 1);
  };


  return (
    <TablePagination
      component="div"
      count={count}
      page={page - 1}
      onPageChange={handleChangePage}
      rowsPerPage={pageSize}
      rowsPerPageOptions={[]}
    />
  );
}
