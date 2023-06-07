import useAsync from "../useAsync";

import * as signUpApi from "../../services/signUpApi";

export default function useSignUp() {
  const {
    loading: signUpLoading,
    error: signUpError,
    act: signUp,
  } = useAsync(signUpApi.signUp, false);

  return {
    signUpLoading,
    signUpError,
    signUp,
  };
}
