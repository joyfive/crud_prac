import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_END_POINT,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }

  return config;
});

export const requestLogin = async (account) => {
  const response = await instance.post("users/login", account);

  return response;
};

export const createUser = async (account) => {
  await instance.post("users/signup", account);
};

export const getPostList = async () => {
  const response = await instance.get("posts");

  return response.data;
};

export const setPost = async (post) => {
  await instance.post("posts", post);
};

export const getPost = async (postId) => {
  const response = await instance.get(`posts/${postId}`);

  return response.data;
};

export const updatePost = async (postId, post) => {
  await instance.put(`posts/${postId}`, post);
};

export const deletePost = async (postId) => {
  await instance.delete(`posts/${postId}`);
};
