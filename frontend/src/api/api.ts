import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002/",
});

export const getAllUser = async () => {
  const { data } = await api.get("/users");
  return data;
};

export const addUser = async (data: [] | {}) => {
  const response = await api.post("/create", data);
};

export const updateUser = async (id: String, data: [] | {}) => {
  const response = await api.put(`/${id}`, data);
};
