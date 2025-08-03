import axios from "axios";

const API = axios.create({
  baseURL: "http://www.omdbapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
