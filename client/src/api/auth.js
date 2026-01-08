import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const register = async (email, password, role) => {
  const response = await axios.post(`${API_URL}/register`, {
    email,
    password,
    role,
  });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return response.data;
};

export const verifyToken = async (token) => {
  const response = await axios.get(`${API_URL}/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
