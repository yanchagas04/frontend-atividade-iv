import LoginForm from "../../components/Login/loginForm"

function LoginPage() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 to-blue-900">
        <LoginForm />
      </div>
    </>
  )
}

export default LoginPage