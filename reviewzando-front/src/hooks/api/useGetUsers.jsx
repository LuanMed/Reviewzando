import useAsync from "../useAsync";
import useToken from "../useToken";

import * as usersApi from "../../services/usersApi";

export default function useGetUsers() {
  const token = useToken();

  const {
    data: getUsers,
    loading: getUsersLoading,
    error: getUsersError,
    act: getUsersAct,
  } = useAsync(() => usersApi.getUsers(token));

  return {
    getUsers,
    getUsersLoading,
    getUsersError,
    getUsersAct,
  };
}
