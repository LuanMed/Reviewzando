import useAsync from "../useAsync";
import useToken from "../useToken";

import * as reviewApi from "../../services/reviewApi";

export default function useGetReviewById() {
  const token = useToken();

  const {
    data: getReviewsById,
    loading: getReviewByIdLoading,
    error: getReviewByIdError,
    act: getReviewByIdAct,
  } = useAsync((id) => reviewApi.getReviewsById(id, token), false);

  return {
    getReviewsById,
    getReviewByIdLoading,
    getReviewByIdError,
    getReviewByIdAct,
  };
}
