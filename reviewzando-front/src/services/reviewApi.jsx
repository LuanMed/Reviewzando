import api from "./api";

export async function getReviews(token) {
  const response = await api.get("/reviews", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getReviewsById(id, token) {
  const response = await api.get(`/reviews/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createReview(body, token) {
  const response = await api.post("/reviews", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteReview(id, token) {
  const response = await api.delete(`/reviews/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
