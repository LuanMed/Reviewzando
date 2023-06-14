import api from "./api";

export async function getFollowsById(token) {
  const response = await api.get("/follows", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postFollows(body, token) {
  console.log(body);
  console.log(token);
  const response = await api.post("/follows", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteFollows(followingId, token) {
  const response = await api.delete(`/follows/${followingId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
