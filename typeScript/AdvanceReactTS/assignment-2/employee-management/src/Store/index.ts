import { proxy } from "valtio";
import { employee } from "../Model/EmployeeApiResponse";

//fetch empoloyee store
interface employeeStoreType {
  employees: employee[];
}

export const employeeStore = proxy<employeeStoreType>({
  employees: [],
});

//for new employee

interface FormState {
  name: string;
  email: string;
  role: string;
}

export const empformState = proxy<FormState>({
  name: "",
  email: "",
  role: "",
});
