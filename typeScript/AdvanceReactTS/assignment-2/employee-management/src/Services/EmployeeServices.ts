import { empApiResp, responseEmployee } from "../Model/EmployeeApiResponse";
import api from "./strapiApi";

// fetch data uing base url
export class EmployeeServices {
  static getAll = async () => {
    const resp = await api.get<empApiResp>("/employees").catch(() => null);
    if (!resp) return null;
    return resp.data.data;
  };

  // deleting employee
  static deleteData = async (id: number) => {
    const emp = await api
      .delete<empApiResp>(`/employees/${id}`)
      .catch(() => null);
    return emp;
  };

  // creating employee response
  static addNewEmployee = async (emp: responseEmployee) => {
    const newEmp = await api
      .post<empApiResp>("/employees", {
        data: {
          Full_Name: emp.data.Full_Name,
          Role: emp.data.Role,
          Email: emp.data.Email,
        },
      })
      .catch(() => null);
    return newEmp;
  };

  // update employe
  static updateEmployee = async () => {
    await api.put<empApiResp>(`/employees/${326}`, {
      data: {
        Full_Name: "Tushar",
        Role: "Intern",
        Email: "tushar@gmail.com",
      },
    });
  };
}
