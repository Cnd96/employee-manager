import { useDispatch, useSelector } from "react-redux";
import EmployeeCard from "@/app/components/molecules/employeeCard";
import { AppDispatch, RootState } from "@/app/store";
import Loading from "../../atoms/spinner";
import Demo from "../pagination";
import { PAGE_SIZE } from "@/app/helpers/constants";
import { getEmployeeListAsync } from "@/app/store/employee.slice";
export default function EmployeesGrid() {
  const dispatch = useDispatch<AppDispatch>();
  const employee = useSelector((state: RootState) => state.employee);
  return (
    <>
      {employee.idLoaded ? (
        <>
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
          <div>
            <Demo
              page={employee.currentPage}
              pageSize={PAGE_SIZE}
              onChangePage={(n) => dispatch(getEmployeeListAsync({ page: n, pageSize: PAGE_SIZE }))}
              count={employee.totalEmployees}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
