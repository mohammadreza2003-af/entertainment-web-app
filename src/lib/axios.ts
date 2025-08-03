import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: "157e7bb8a75814c47e738bb5d3521991" },
});
export default API;
