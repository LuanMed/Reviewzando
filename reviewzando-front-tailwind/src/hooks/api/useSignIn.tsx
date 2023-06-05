import useAsync from "../useAsync";

import * as signInApi from "../../services/signInApi";

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync(signInApi.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
