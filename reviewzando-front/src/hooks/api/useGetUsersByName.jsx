import useAsync from "../useAsync";
import useToken from "../useToken";

import * as usersApi from "../../services/usersApi";

export default function useGetUsersByName() {
  const token = useToken();

  const {
    data: users,
    loading: getUsersLoading,
    error: getUsersError,
    act: getUsers,
  } = useAsync(
    (searchTerm) => usersApi.getUsersByName(searchTerm, token),
    false
  );

  return {
    users,
    getUsersLoading,
    getUsersError,
    getUsers,
  };
}
