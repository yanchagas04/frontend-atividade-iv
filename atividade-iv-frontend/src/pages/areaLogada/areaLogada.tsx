import { useParams } from "react-router-dom"
import { Header } from "../../components/AreaLogada/header"
import { ListaFilmes } from "../../components/AreaLogada/listaFilmes"
import type { Filme } from "../../models/filmes/filme"
import { useEffect, useState } from "react"
import { getFilmes } from "../../controllers/filmes/filmeController"
import FormFilme from "../../components/AreaLogada/formFilme"

export default function AreaLogada() {
    const id = useParams().id as string
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        const awaitgetFilmes = async (id: string) => {
            const filmes = (await getFilmes(id)).filmes;
            setFilmes(filmes as Filme[]);
        }
        awaitgetFilmes(id);
    }, [filmes])
    return (
        <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-gray-300 from-75% to-gray-400 gap-4">
            <Header/>
            <ListaFilmes filmes={filmes} />
            <button className="w-16 h-16 flex justify-center items-center rounded-full fixed bottom-4 right-4 bg-gradient-to-r from-blue-400 to-blue-800 transition-all duration-300 ease-in-out hover:scale-110" onClick={() => {
                setOpenModal(true)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EFEFEF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </button>
            {openModal && <FormFilme id={id} close={() => {setOpenModal(false)}}/>}
        </div>
    )
}