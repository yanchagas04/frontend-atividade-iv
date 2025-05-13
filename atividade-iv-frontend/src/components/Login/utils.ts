import register from "../../auth/register";

export async function send_register() {
    const res : any = await register({
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        password: (document.getElementById('password') as HTMLInputElement).value
    })
    const response = await res.json();
    if(response.success){
        alert('Usuário cadastrado com sucesso!')
    } else {
        alert(response.error)
    }
}