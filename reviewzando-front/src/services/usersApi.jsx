import api from "./api";

export async function getUsers(token) {
  const response = await api.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getUsersByName(searchTerm, token) {
  const response = await api.get(`/users/${searchTerm}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
