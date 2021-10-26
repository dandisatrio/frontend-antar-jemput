import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "localhost:8080/",
});

axiosInstace.interceptors.request.use((value) => {
  value.params = value.params || {};
  value.params.api_key = "2fdc582bfb5b21635f8f";
  return value;
});

export { axiosInstace };