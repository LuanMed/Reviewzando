import useAsync from "../useAsync";
import useToken from "../useToken";
import { createReview } from "../../services/reviewApi";

export default function usePostReview() {
  const token = useToken();

  const {
    loading: reviewLoading,
    error: reviewError,
    act: reviewAct,
  } = useAsync((data) => createReview(data, token), false);

  return {
    reviewLoading,
    reviewError,
    reviewAct,
  };
}
