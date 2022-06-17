import axios from 'axios';
import { getUser } from '../util/auth';

const API_URL = "https://my-tasks-back-livia.herokuapp.com"

const user = getUser()

axios.defaults.baseURL = "API_URL"

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${user.token}`
    }
});