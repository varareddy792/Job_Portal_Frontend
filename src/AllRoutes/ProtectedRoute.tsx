import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';

const ProtectedRoute = () => {
    const user_token = Cookies.get('token');
    return (user_token !== undefined && user_token !== null) ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute;