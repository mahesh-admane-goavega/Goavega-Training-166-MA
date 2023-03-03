import { ApiResponse } from "./APIResponse";
// object of data type
export interface user {
  id: number;
  attributes: {
    Full_Name: string;
    Email: string;
    Role: string;
  };
}

// extended interface where already declared data
export interface userApiResp extends ApiResponse<user> {}

// response data type
// export interface responseEmployee {
//   data: {
//     Full_Name: string;
//     Role: string;
//     Email: string;
//   };
// }
