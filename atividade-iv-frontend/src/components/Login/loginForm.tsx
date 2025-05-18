import { toast, ToastContainer, type ToastOptions} from "react-toastify";
import { analyze_email, analyze_forms, analyze_password } from "./analyze";
import { Link } from "react-router-dom";

export default function LoginForm() {
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
        <div id="div-login" className="w-10/12 md:w-1/2 max-w-md h-fit flex flex-col justify-center items-center bg-gray-200 p-4 gap-4 rounded-lg drop-shadow-2xl inter" onChange={() => {
            if (document.getElementById('aviso-formulario')) {
                document.getElementById('aviso-formulario')?.remove();
            }
        }}>
            <div className="w-full h-fit flex flex-col justify-center items-center gap-2">

                <svg  xmlns="http://www.w3.org/2000/svg"  width={64}  height={64}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-movie"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 4l0 16" /><path d="M16 4l0 16" /><path d="M4 8l4 0" /><path d="M4 16l4 0" /><path d="M4 12l16 0" /><path d="M16 8l4 0" /><path d="M16 16l4 0" /></svg>
                <h1 className="text-3xl font-bold w-fit">Login</h1>
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
            <button className="w-full text-white p-2 bg-green-600 hover:bg-green-700 font-bold rounded-sm transition duration-150 ease-in-out cursor-pointer hover:scale-[102%]" onClick={async () => {
                const response = await analyze_forms();
                console.log(response);
                if (response.success) {
                    notify(response.msg, 'success');
                } else {
                    notify(response.msg, 'error');
                }
            }}>Entrar</button>
            <Link to="/register" className="w-full text-center hover:text-gray-700 transition-all duration-150 ease-in-out">Ainda não tem uma conta? Clique aqui para se registrar.</Link>
            <ToastContainer />
        </div>
    )
}