import api from "./api";

export async function signIn(email: string, password: string) {
  const response = await api.post("/signin", {
    email,
    password,
  });
  return response.data;
}
