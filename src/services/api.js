import axios from 'axios';
import { getUser } from '../util/auth';
import {API_URL} from "./env";

const user = getUser()

axios.defaults.baseURL = API_URL

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${user.token}`
    }
});