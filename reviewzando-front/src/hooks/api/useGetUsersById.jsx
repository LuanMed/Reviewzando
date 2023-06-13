import useAsync from "../useAsync";
import useToken from "../useToken";

import * as usersApi from "../../services/usersApi";

export default function useGetUsersById() {
  const token = useToken();

  const {
    data: getUsersById,
    loading: getUsersLoadingById,
    error: getUsersErrorById,
    act: getUsersActById,
  } = useAsync((id) => usersApi.getUsersById(id, token), false);

  return {
    getUsersById,
    getUsersLoadingById,
    getUsersErrorById,
    getUsersActById,
  };
}
