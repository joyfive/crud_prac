import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: process.env.REACT_APP_END_POINT,
});

instance.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${token}`;

  return config;
});

export const createUser = async (account) => {
  await instance.post("/users/signup", account);
};

export const requestLogin = async (account) => {
  const response = await instance.post("/users/login", account);

  return response;
};

export const createPost = async (post) => {
  await instance.post("/posts", post);
};

export const getPostList = async () => {
  const response = await instance.get("/posts");

  return response.data;
};

export const getPost = async (id) => {
  const response = await instance.get(`/posts/${id}`);
  
  return response.data;
};

export const updatePost = async (id, post) => {
  await instance.put(`posts/${id}`, post);
};

export const deletePost = async (id) => {
  await instance.delete(`posts/${id}`);
};
