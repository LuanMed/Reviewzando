import useAsync from "../useAsync";
import useToken from "../useToken";

import * as followsApi from "../../services/followsApi";

export default function useGetFollowsById() {
  const token = useToken();

  const {
    data: followsById,
    loading: followsByIdLoading,
    error: followsByIdError,
    act: getFollowsById,
  } = useAsync(() => followsApi.getFollowsById(token));

  return {
    followsById,
    followsByIdLoading,
    followsByIdError,
    getFollowsById,
  };
}
