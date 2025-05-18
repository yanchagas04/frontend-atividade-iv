import criarFilme from "../../auth/filmes/createFilme";
import pegarFilmes from "../../auth/filmes/getFilmes";
import type { FilmePost } from "../../models/filmes/filme";

export type filmeResponse = {
    msg: string,
    success: boolean,
    filme: FilmePost | null 
}

export type filmesResponse = {
    msg: string,
    success: boolean,
    filmes: FilmePost[] | null 
}

export async function createFilme(filme: FilmePost) {
    const res = await criarFilme(filme)
    const response = await res.json();
    console.log(response);
    if(response.success){
        return {msg: "Filme criado com sucesso", success: response.success, filme: response.filme} as filmeResponse
    } else {
        return {msg: response.error, success: response.success} as filmeResponse
    }
}

export async function getFilmes(userId: string) {
    const res = await pegarFilmes(userId)
    const response = await res.json();
    console.log(response);
    if(response.success){
        return {msg: "Filmes obtidos com sucesso", success: response.success, filmes: response.filmes} as filmesResponse
    } else {
        return {msg: response.error, success: response.success} as filmesResponse
    }
}
