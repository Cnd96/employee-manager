"use client";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MALE } from "@/app/helpers/constants";
import createEmployee from "@/app/helpers/createEmployee";
import { EmployeePayload } from "@/app/types/employee";
import { employeeSchema } from "@/app/helpers/yupSchema";
import EmployeeFormData from "@/app/components/molecules/formData/formData";

export default function EmployeeAddPage() {
  const router = useRouter();
  const smallScreen = useMediaQuery("(max-width:500px)");
  const mediumScreen = useMediaQuery("(max-width:700px)");

  const methods = useForm<EmployeePayload>({
    resolver: yupResolver(employeeSchema),
    defaultValues: {
      first_name: "chamal",
      last_name: "demele",
      email: "cham@ga.am",
      phone: "+94776917353",
      gender: MALE,
    },
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  const onCreateEmployee = async (data: EmployeePayload) => {
    const res = await createEmployee(data);
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
            <form onSubmit={handleSubmit(onCreateEmployee)}>
              <EmployeeFormData errors={errors} text="ADD" />
            </form>
          </FormProvider>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
