import type { Filme } from "../../models/filmes/filme"

const API_URL = import.meta.env.VITE_API_URL

export default async function changeWatched(filme: Filme) {
    const token = localStorage.getItem('token')
    return await fetch(API_URL + '/api/filmes/'+ filme.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(filme)
    })
}