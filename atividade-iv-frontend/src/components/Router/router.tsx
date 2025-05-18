import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "../../routes/login/login";
import RegisterPage from "../../routes/register/register";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router