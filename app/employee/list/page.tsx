"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Container } from "@mui/system";
import Stack from "@mui/material/Stack";
import { getEmployeeListAsync } from "@/app/store/employee.slice";
import { AppDispatch } from "@/app/store";
import { GRID_VIEW, LIST_VIEW, PAGE_SIZE } from "@/app/helpers/constants";
import TextButton from "@/app/components/atoms/textButton";
import IconButton from "@/app/components/atoms/iconButton.tsx/iconButton";
import theme from "@/app/styles/theme";
import EmployeesList from "../../components/molecules/employeesList/employeesList";
import EmployeesGrid from "../../components/molecules/employeesGrid/employeesGrid";
import GridView from "@/public/images/GridView.svg";
import ListView from "@/public/images/ListView.svg";

export default function EmployeeListPage() {
  const router = useRouter();
  const [selectedView, setSelectedView] = useState(GRID_VIEW);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getEmployeeListAsync({ page: 1, pageSize: PAGE_SIZE }));
  }, []);

  const onViewChange = () => {
    if (selectedView === GRID_VIEW) {
      setSelectedView(LIST_VIEW);
    } else {
      setSelectedView(GRID_VIEW);
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"flex-end"}
          margin={"20px 0"}
          alignItems={"center"}
        >
          <TextButton
            text="Add Employee"
            background={theme.primaryMain}
            onClick={() => router.push("/employee/add")}
          />
          <IconButton
            src={selectedView === GRID_VIEW ? GridView : ListView}
            background={theme.primaryMain}
            onClick={() => onViewChange()}
          />
        </Stack>
        {selectedView === GRID_VIEW ? <EmployeesGrid /> : <EmployeesList />}
      </Container>
    </>
  );
}
