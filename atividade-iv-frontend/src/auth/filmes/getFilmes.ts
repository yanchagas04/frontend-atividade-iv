const API_URL = import.meta.env.VITE_API_URL

export default async function pegarFilmes(userId: string) {
    const token = localStorage.getItem('token')
    return await fetch(API_URL + '/api/filmes/usuario/' + userId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
    })
}