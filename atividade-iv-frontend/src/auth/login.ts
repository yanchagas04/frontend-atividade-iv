import type { UserLogin } from "../models/auth/user";

const API_URL = import.meta.env.VITE_API_URL

export default function login(user: UserLogin) {
    return fetch(API_URL + '/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
}