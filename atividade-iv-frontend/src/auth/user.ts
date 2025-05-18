export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export function storeUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
}