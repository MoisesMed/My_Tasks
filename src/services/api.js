import axios from 'axios';
import {API_URL} from "./env";
import { getUser } from '../util/auth';

// const user = getUser();

// axios.defaults.baseURL = API_URL

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        // 'Authorization': `Bearer ${user.token}`
    }
});