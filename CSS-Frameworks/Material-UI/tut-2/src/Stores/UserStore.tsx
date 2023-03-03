import { proxy } from "valtio";

import { user } from "../Modals/UserApiResponse";

interface userType {
  user: user[];
}

export const userStore = proxy<userType>({
  user: [],
});
