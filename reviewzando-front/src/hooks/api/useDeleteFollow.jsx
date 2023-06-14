import useAsync from "../useAsync";
import useToken from "../useToken";

import * as followsApi from "../../services/followsApi";

export default function useDeleteFollow() {
  const token = useToken();

  const {
    loading: deleteFollowsLoading,
    error: deleteFollowsError,
    act: deleteFollows,
  } = useAsync((data) => followsApi.deleteFollows(data, token), false);

  return {
    deleteFollowsLoading,
    deleteFollowsError,
    deleteFollows,
  };
}
