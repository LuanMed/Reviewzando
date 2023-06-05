import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL,
});

export default instance;
