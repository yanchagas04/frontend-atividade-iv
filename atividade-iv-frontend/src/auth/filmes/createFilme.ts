import type { FilmePost } from "../../models/filmes/filme"

const API_URL = import.meta.env.VITE_API_URL

export default async function criarFilme(filme: FilmePost) {
    const token = localStorage.getItem('token')
    return await fetch(API_URL + '/api/filmes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(filme)
    })
}