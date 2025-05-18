const API_URL = import.meta.env.VITE_API_URL

export default async function deletarFilme(id: string) {
    const token = localStorage.getItem('token')
    return await fetch(API_URL + '/api/filmes/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
    })
}