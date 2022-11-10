import axios from "axios";

const api = axios.create({
  baseURL: "https://workmatch-api.herokuapp.com",
});

export default api;
