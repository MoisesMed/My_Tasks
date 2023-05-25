import axios from "axios";
import { getUser } from "../util/auth";

const API_URL = process.env.REACT_APP_API_URL;
export const user = getUser();

axios.defaults.baseURL = API_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${user.token}`,
  },
});
