import { user, userApiResp } from "../Modals/UserApiResponse";

import api from "./Api";

export class UserService {
  // getting all users
  static getAllUser = async () => {
    const resp = await api.get<userApiResp>("/employees").catch(() => null);
    if (!resp) return null;
    return resp.data.data;
  };

  // add user
  static addUser = async (myData: any) => {
    console.log(myData.Full_Name);
    await api
      .post<any>("/employees", {
        data: {
          Full_Name: myData.Full_Name,
          Role: myData.Role,
          Email: myData.Email,
        },
      })
      .catch(() => null);
    return console.log("Success!");
  };

  // delete user
  static deleteUser = async (id: number) => {
    console.log("Id from service", id);
    await api.delete<any>(`/employees/${id}`).catch(() => null);
    return console.log("Deleted Sucessfuly...!");
  };
}
