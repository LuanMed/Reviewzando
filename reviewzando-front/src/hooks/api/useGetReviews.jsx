import useAsync from "../useAsync";
import useToken from "../useToken";

import * as reviewApi from "../../services/reviewApi";

export default function useGetReview() {
  const token = useToken();

  const {
    data: getReview,
    loading: getReviewLoading,
    error: getReviewError,
    act: getReviewAct,
  } = useAsync(() => reviewApi.getReviews(token));

  return {
    getReview,
    getReviewLoading,
    getReviewError,
    getReviewAct,
  };
}
