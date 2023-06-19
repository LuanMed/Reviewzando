import useAsync from "../useAsync";
import useToken from "../useToken";

import * as reviewApi from "../../services/reviewApi";

export default function useDeleteReview() {
  const token = useToken();

  const {
    loading: deleteReviewLoading,
    error: deleteReviewError,
    act: deleteReview,
  } = useAsync((id) => reviewApi.deleteReview(id, token), false);

  return {
    deleteReviewLoading,
    deleteReviewError,
    deleteReview,
  };
}
