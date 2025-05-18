import { useState } from "react"
import type { Filme } from "../../models/filmes/filme"
import { deleteFilme, updateFilme } from "../../controllers/filmes/filmeController"
import { toast, ToastContainer, type ToastOptions } from "react-toastify"

const deleteBranco = <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
const deleteCinza = <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#666666"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
const emptyCheckbox = <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
const selectedCheckbox = <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>


const notify = (msg: string, type: ToastOptions['type']) => toast(msg, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: type
    });

function Filme(props: Filme) {
    const [hovered, setHovered] = useState(false)
    return (
        <div className="w-full h-32 flex flex-row justify-center items-center bg-gray-200 shadow-xl rounded-lg border-2 border-zinc-300 overflow-clip">
            <div className={`flex w-16 h-full  justify-center items-center transition-all duration-300 ease-in-out gap-2 rounded-lg`}>
                <button className="flex justify-center items-center cursor-pointer hover:scale-120 transition-all duration-300 ease-in-out" onClick={async () => {
                    const newFilme = {...props, watched: !props.watched}
                    const res = await updateFilme(newFilme)
                    if (res.success) {
                        notify('Filme marcado como ' + (props.watched ? 'não visto' : 'visto'), 'success')
                    } else {
                        notify(res.msg, 'error')
                    }
                }}>
                    {props.watched ? selectedCheckbox : emptyCheckbox}
                </button>
            </div>
            <div className="w-full h-full flex flex-col p-4">
                <h3 className="font-bold w-full text-2xl">{props.title}</h3>
                <p className="w-full text-lg text-justify indent-2">{props.description}</p>
            </div>
            <div className={`flex w-16 hover:w-40 h-full  justify-center items-center transition-all duration-300 ease-in-out hover:bg-red-700 gap-2 rounded-lg`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {hovered && <p className="text-white text-xl">Excluir</p>}
                <button className="flex justify-center items-center cursor-pointer" onClick={async () => {
                    const res = await deleteFilme(props.id)
                    if (res.success) {
                        notify('Filme excluído com sucesso', 'success')
                    } else {
                        notify(res.msg, 'error')
                    }
                }}>
                    {hovered ? deleteBranco : deleteCinza}
                </button>
            </div>
        </div>
    )
}

export function ListaFilmes(props: {filmes: Filme[]}) {
    return (
        <div className="w-full min-h-full h-fit flex flex-col items-center p-4 gap-4">
            {props.filmes.length === 0 ? <p>Você ainda não possui nenhum filme</p> : props.filmes.map(filme => <Filme key={filme.id} {...filme} />)}
            <ToastContainer />
        </div>
    )
}