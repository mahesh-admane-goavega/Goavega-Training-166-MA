import {
  empApiResp,
  employee,
  responseEmployee,
} from "../Model/EmployeeApiResponse";
import { EmployeeServices } from "../Services/EmployeeServices";
import { employeeStore } from "../Store";

// fetched employee data adding in store
export class EmployeeManager {
  static getAll = async () => {
    const allEmp = await EmployeeServices.getAll();
    if (!allEmp) return null;
    employeeStore.employees = allEmp;
  };

  // delete by using id
  static deleteById = async (id: number) => {
    await EmployeeServices.deleteData(id);
    this.getAll();
  };

  // add new emp
  static addNewEmp = async (emp: responseEmployee) => {
    console.log("EmpMngr", emp);
    const newEmp = await EmployeeServices.addNewEmployee(emp);
    this.getAll();
  };
}
