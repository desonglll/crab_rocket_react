import {Fade} from "@mui/material";
import {EmployeeList} from "../../components/Employee/EmployeeList.tsx";

function Employee() {
    return (
        <>
            <Fade in={true}>
                <div>
                    <EmployeeList/>
                </div>
            </Fade>
        </>
    );
}

export default Employee;
