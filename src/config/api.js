import { create } from "apisauce";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const api = create({
  baseURL,
  timeout: 5000,
  headers: { 'x-access-token': localStorage.getItem('token') }
});

export default api;
