import { useSelector } from "react-redux";
import EmployeeCard from "@/app/components/molecules/employeeCard";
import { RootState } from "@/app/store";

export default function EmployeesGrid() {
  const employee = useSelector((state: RootState) => state.employee);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {employee.employeeList.map((employee) => (
        <EmployeeCard
          key={employee.id}
          id={employee.id}
          name={`${employee.first_name} ${employee.last_name}`}
          email={employee.email}
          phone={employee.phone}
          gender={employee.gender}
          imageSrc={employee.photo}
        />
      ))}
    </div>
  );
}
