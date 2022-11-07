import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonwnorkmatch.herokuapp.com",
});

export default api;
