import api from "./api";

export async function createReview(body, token) {
  const response = await api.post("/new-review", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
