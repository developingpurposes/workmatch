import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/login",
});

export default api;
