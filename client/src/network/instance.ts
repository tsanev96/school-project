import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
