import register from "../../auth/register";

export type registerResponse = {
    success: boolean,
    msg: string
}

export async function send_register(name: string, email: string, password: string) {
    const res : any = await register({
        name: name,
        email: email,
        password: password
    })
    const response = await res.json();
    console.log(response);
    if(response.success){
        return {msg: "Usuário cadastrado com sucesso", success: response.success} as registerResponse
    } else {
        return {msg: response.error, success: response.success} as registerResponse
    }
}