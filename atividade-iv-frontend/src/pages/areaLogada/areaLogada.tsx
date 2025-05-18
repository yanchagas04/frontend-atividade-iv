import { useParams } from "react-router-dom"
import type { FilmePost } from "../../models/filmes/filme"
import { createFilme, getFilmes } from "../../controllers/filmes/filmeController"
import pegarFilmes from "../../auth/filmes/getFilmes"

export default function AreaLogada() {
    const id = useParams().id as string
    return (
        <div>
            <h1>Area logada {id}</h1>
            <button className="bg-blue-500 p-2 text-white" onClick={async () => {
                const res = await getFilmes(id)
                console.log(res)
            }}>teste filme</button>
        </div>
    )
}