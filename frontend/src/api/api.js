import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002/",
});

export const getAllUser = async () => {
  const { data } = await api.get("/users");
  return data;
};
