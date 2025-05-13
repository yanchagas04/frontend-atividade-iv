import { send_register, type registerResponse } from "./utils";
import { validate_email, validate_form, validate_password } from "./validation";

export function analyze_email() {
    if (validate_email((document.getElementById('email') as HTMLInputElement).value)) {
        (document.getElementById('email') as HTMLInputElement).classList.remove('border-red-600');
        (document.getElementById('email') as HTMLInputElement).classList.add('border-transparent');
        if (document.getElementById('aviso-email')) {
            document.getElementById('aviso-email')?.remove();
        }
    } else {
        (document.getElementById('email') as HTMLInputElement).classList.remove('border-transparent');
        (document.getElementById('email') as HTMLInputElement).classList.add('border-red-600');
        let aviso = document.createElement('p');
        aviso.innerText = 'Email inválido';
        aviso.classList.add('text-red-600');
        aviso.id = 'aviso-email';
        if (document.getElementById('aviso-email')) {
            document.getElementById('aviso-email')?.remove();
        }
        document.getElementById('div-email')?.appendChild(aviso);
    }
}

export function analyze_password() {
    if (validate_password((document.getElementById('password') as HTMLInputElement).value)) {
        (document.getElementById('password') as HTMLInputElement).classList.remove('border-red-600');
        (document.getElementById('password') as HTMLInputElement).classList.add('border-transparent');
        if (document.getElementById('aviso-password')) {
            document.getElementById('aviso-password')?.remove();
        }
    } else {
        (document.getElementById('password') as HTMLInputElement).classList.remove('border-transparent');
        (document.getElementById('password') as HTMLInputElement).classList.add('border-red-600');
        let aviso = document.createElement('p');
        aviso.innerText = 'Senha deve ter no mínimo 8 caracteres';
        aviso.classList.add('text-red-600');
        aviso.id = 'aviso-password';
        if (document.getElementById('aviso-password')) {
            document.getElementById('aviso-password')?.remove();
        }
        document.getElementById('div-password')?.appendChild(aviso);
    }
}

export async function analyze_forms() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    if (validate_form(email, password)){
        return await send_register();
    } else {
        return {msg: 'Formulário inválido', success: false} as registerResponse
    }
}