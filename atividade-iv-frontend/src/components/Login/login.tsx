import { toast, ToastContainer, type ToastOptions} from "react-toastify";
import { analyze_email, analyze_forms, analyze_password } from "./analyze";

export default function Login() {
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
        <div id="div-login" className="w-10/12 md:w-1/2 max-w-md h-fit flex flex-col justify-center items-center bg-gray-200 p-4 gap-4 rounded-lg drop-shadow-2xl dm-serif" onChange={() => {
            if (document.getElementById('aviso-formulario')) {
                document.getElementById('aviso-formulario')?.remove();
            }
        }}>
            <h1 className="text-3xl font-bold w-fit">Novo Usuário</h1>
            <div className="w-full h-fit flex flex-col justify-center items-center gap-1">
                <label htmlFor="name" className="text-center w-full flex">Nome</label>
                <input id="name" type="text" className="w-full p-2 bg-gray-300 rounded-sm"/>
            </div>
            <div id="div-email" className="w-full h-fit flex flex-col justify-center items-center gap-1">
                <label htmlFor="email" className="text-center w-full flex">Email</label>
                <input id="email" type="email" className="w-full p-2 bg-gray-300 rounded-sm border-2 border-transparent" onChange={() => {
                    analyze_email();
                }}/>
            </div>
            <div id="div-password" className="w-full h-fit flex flex-col justify-center items-center gap-1">
                <label htmlFor="password" className="text-center w-full flex">Senha</label>
                <input id="password" type="password" className="w-full p-2 bg-gray-300 rounded-sm border-2 border-transparent" onChange={() => {
                    analyze_password();
                }}/>
            </div>
            <button className="w-full text-white p-2 bg-green-600 hover:bg-green-700 font-bold rounded-sm transition duration-150 ease-in-out cursor-pointer" onClick={async () => {
                const response = await analyze_forms();
                console.log(response);
                if (response.success) {
                    notify(response.msg, 'success');
                } else {
                    notify(response.msg, 'error');
                }
            }}>Registrar</button>
            <ToastContainer />
        </div>
    )
}