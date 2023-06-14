import useAsync from "../useAsync";
import useToken from "../useToken";

import * as followsApi from "../../services/followsApi";

export default function usePostFollow() {
  const token = useToken();

  const {
    loading: postFollowsLoading,
    error: postFollowsError,
    act: postFollows,
  } = useAsync((data) => followsApi.postFollows(data, token), false);

  return {
    postFollowsLoading,
    postFollowsError,
    postFollows,
  };
}
