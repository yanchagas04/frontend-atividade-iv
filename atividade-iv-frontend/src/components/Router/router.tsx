import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import AreaLogada from "../../pages/areaLogada/areaLogada";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/:id" element={<AreaLogada />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router