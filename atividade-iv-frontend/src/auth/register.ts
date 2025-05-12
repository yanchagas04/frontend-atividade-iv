import type { UserRegister } from "../models/auth/user";

const API_URL = import.meta.env.VITE_API_URL

export default function register(user: UserRegister) {
    return fetch(API_URL + '/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}