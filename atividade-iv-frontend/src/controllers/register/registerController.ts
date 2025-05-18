import register from "../../auth/register";

export type registerResponse = {
    success: boolean,
    msg: string
}

export async function send_register() {
    const res : any = await register({
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        password: (document.getElementById('password') as HTMLInputElement).value
    })
    const response = await res.json();
    console.log(response);
    if(response.success){
        return {msg: "Usuário cadastrado com sucesso", success: response.success} as registerResponse
    } else {
        return {msg: response.error, success: response.success} as registerResponse
    }
}