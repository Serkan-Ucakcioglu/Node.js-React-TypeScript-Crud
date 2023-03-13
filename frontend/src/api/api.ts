import axios from "axios";
import { Inputs } from "../Components/Modal/EditModal";

const api = axios.create({
  baseURL: "http://localhost:3002/",
});

export const getAllUser = async () => {
  const { data } = await api.get("/users");
  return data;
};

//Add user
export const addUser = async (data: Inputs) => {
  const response = await api.post("/create", data);
};

//updated user
export const updateUser = async (id: String, data: [] | {}) => {
  const response = await api.put(`/${id}`, data);
};

export const deleteUser = async (id: String) => {
  const response = await api.delete(`/${id}`);
};
