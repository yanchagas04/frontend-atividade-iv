import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import AreaLogada from "../../pages/areaLogada/areaLogada";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/:id" element={<AreaLogada />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router