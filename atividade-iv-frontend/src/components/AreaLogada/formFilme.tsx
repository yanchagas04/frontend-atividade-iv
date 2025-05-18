import { toast, type ToastOptions } from "react-toastify";
import { createFilme } from "../../controllers/filmes/filmeController";
import type { FilmePost } from "../../models/filmes/filme";

export default function FormFilme(props: {id: string, close: () => void}) {
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
    return (
        <div id="div-login" className="m-auto w-10/12 md:w-1/2 max-w-md h-fit flex flex-col justify-center items-center bg-gray-200 p-4 gap-4 rounded-lg drop-shadow-2xl inter" onChange={() => {
            if (document.getElementById('aviso-formulario')) {
                document.getElementById('aviso-formulario')?.remove();
            }
        }}>
            <div className="w-full h-fit flex flex-col justify-center items-center gap-2">
                <h1 className="text-3xl font-bold w-fit">Novo Filme</h1>
            </div>
            <div id="div-title" className="w-full h-fit flex flex-col justify-center items-center gap-1">
                <label htmlFor="title" className="text-center w-full flex">Título</label>
                <input id="title" type="title" className="w-full p-2 bg-gray-300 rounded-sm border-2 border-transparent" onChange={() => {
                    
                }}/>
            </div>
            <div id="div-description" className="w-full h-fit flex flex-col justify-center items-center gap-1">
                <label htmlFor="description" className="text-center w-full flex">Descrição</label>
                <textarea id="description" className="w-full p-2 bg-gray-300 rounded-sm border-2 border-transparent" onChange={() => {
                    
                }}/>
            </div>
            <button className="w-full text-white p-2 bg-green-600 hover:bg-green-700 font-bold rounded-sm transition duration-150 ease-in-out cursor-pointer hover:scale-[102%]" onClick={async () => {
                const filme : FilmePost = {
                    title: (document.getElementById('title') as HTMLInputElement)?.value as string,
                    description: (document.getElementById('description') as HTMLInputElement)?.value as string,
                    userId: props.id
                }
                const response = await createFilme(filme);
                if(response.success){
                    notify('Filme criado com sucesso', 'success')
                    props.close();
                } else {
                    notify(response.msg, 'error')
                }
            }}>Entrar</button>
            <button className="w-full text-white p-2 bg-red-600 hover:bg-red-700 font-bold rounded-sm transition duration-150 ease-in-out cursor-pointer hover:scale-[102%]" onClick={props.close}>Fechar</button>
        </div>
    )
}