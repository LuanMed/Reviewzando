import api from "./api";

export async function signUp(username, email, password, picture_url) {
  const response = await api.post("/signup", {
    username,
    email,
    password,
    picture_url,
  });
  return response.data;
}
