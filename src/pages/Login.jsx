import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../services/auth.jsx";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    

    const fromPath = location.state?.from?.pathname || "/resources";

    function handleLogin(e) {
        e.preventDefault();

        login();

        navigate(fromPath, {replace: true });
    }

    return (
        <div>
            <h1>Login</h1>
            <p>This is the Login page</p>
            <form onSubmit={handleLogin}>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}