import api from "./api";

export async function signUp(
  username: string,
  email: string,
  password: string,
  picture_url: string
) {
  const response = await api.post("/signup", {
    username,
    email,
    password,
    picture_url,
  });
  return response.data;
}
