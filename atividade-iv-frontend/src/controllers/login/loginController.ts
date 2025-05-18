import login from "../../auth/login";

export type loginResponse = {
    success: boolean,
    token: string,
    msg: string
}

export async function send_login(email: string, password: string) {
    const res : any = await login({
        email: email,
        password: password
    })
    const response = await res.json();
    console.log(response);
    if(response.success){
        return {msg: "Usuário logado com sucesso", success: response.success, token: response.token} as loginResponse
    } else {
        return {msg: response.error, success: response.success, token: "No Token"} as loginResponse
    }
}