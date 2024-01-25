"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RootState } from "@/app/store";
import { EmployeePayload } from "@/app/types/employee";
import { FEMALE, MALE } from "@/app/helpers/constants";
import { employeeSchema } from "@/app/helpers/yupSchema";
import updateEmployee from "@/app/helpers/updateEmployee";
import EmployeeFormData from "@/app/components/molecules/formData/formData";

interface Props {
  params: { id: number };
}

const EmployeeEditPage = ({ params: { id } }: Props) => {
  const router = useRouter();
  const employee = useSelector((state: RootState) =>
    state.employee.employeeList.find((e) => e.id == id)
  );
  const smallScreen = useMediaQuery("(max-width:500px)");
  const mediumScreen = useMediaQuery("(max-width:700px)");

  const methods = useForm<EmployeePayload>({
    resolver: yupResolver(employeeSchema),
    defaultValues: {
      first_name: employee?.first_name,
      last_name: employee?.last_name,
      email: employee?.email,
      phone: employee?.phone,
      gender: employee?.gender === "M" ? MALE : FEMALE,
    },
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onUpdateEmployee = async (data: EmployeePayload) => {
    const res = await updateEmployee({
      ...data,
      photo: employee?.photo,
      id: employee?.id,
    });
    if (res.isSuccess) {
      router.push("/employee/list");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          minHeight: "250px",
          width: smallScreen ? "90%" : mediumScreen ? "75%" : "50%",
          margin: "50px 0",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onUpdateEmployee)}>
              <EmployeeFormData errors={errors} text="SAVE" />
            </form>
          </FormProvider>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default EmployeeEditPage;
