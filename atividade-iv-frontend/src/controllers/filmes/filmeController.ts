import criarFilme from "../../auth/filmes/createFilme";
import deletarFilme from "../../auth/filmes/deletarFilme";
import pegarFilmes from "../../auth/filmes/getFilmes";
import changeWatched from "../../auth/filmes/putFIlme";
import type { Filme, FilmePost } from "../../models/filmes/filme";

export type filmeResponse = {
    msg: string,
    success: boolean,
    filme: FilmePost | null 
}

export type filmesResponse = {
    msg: string,
    success: boolean,
    filmes: Filme[] | null 
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

export async function getFilmes(userId: string): Promise<filmesResponse> {
    const res = await pegarFilmes(userId)
    const response = await res.json();
    if(response.success){
        return {msg: "Filmes obtidos com sucesso", success: response.success, filmes: response.filmes} as filmesResponse
    } else {
        return {msg: response.error, success: response.success} as filmesResponse
    }
}

export async function deleteFilme(id: string) {
    const res = await deletarFilme(id)
    const response = await res.json();
    console.log(response);
    if(response.success){
        return {msg: "Filme deletado com sucesso", success: response.success} as filmeResponse
    } else {
        return {msg: response.error, success: response.success} as filmeResponse
    }
}

export async function updateFilme(filme: Filme) {
    const res = await changeWatched(filme)
    const response = await res.json();
    console.log(response);
    if(response.success){
        return {msg: "Filme editado com sucesso", success: response.success, filme: response.filme} as filmeResponse
    } else {
        return {msg: response.error, success: response.success} as filmeResponse
    }
}