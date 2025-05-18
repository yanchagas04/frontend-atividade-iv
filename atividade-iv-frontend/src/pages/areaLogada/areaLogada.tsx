import { useParams } from "react-router-dom"
import type { FilmePost } from "../../models/filmes/filme"
import { createFilme, deleteFilme, getFilmes } from "../../controllers/filmes/filmeController"
import pegarFilmes from "../../auth/filmes/getFilmes"

export default function AreaLogada() {
    const id = useParams().id as string
    return (
        <div>
            <h1>Area logada {id}</h1>
            <button className="bg-blue-500 p-2 text-white" onClick={async () => {
                const res = await deleteFilme("21d29916-9370-4e0d-be9d-51b9247d0ff5")
                console.log(res)
            }}>teste filme</button>
        </div>
    )
}