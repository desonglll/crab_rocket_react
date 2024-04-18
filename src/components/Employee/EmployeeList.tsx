import { BackButton } from "../Common/BackButton.tsx";
import EmployeeTable from "./EmployeeTable.tsx";

export function EmployeeList() {
  return (
    <>
      <p className="fs-2">Employee List</p>
      <BackButton />
      <EmployeeTable />
    </>
  );
}
