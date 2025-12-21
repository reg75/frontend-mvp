import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../services/auth.jsx";
import { useState } from "react";
import PublicLayout from "../components/layout/PublicLayout.jsx";
import Alert from "../components/ui/Alert.jsx";
import Loader from "../components/ui/Loader.jsx";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    

    const fromPath = location.state?.from?.pathname || "/resources";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedback] = useState(null) // {type}
    
    // EN: Dummy authentication for MVP purposes (no real backend or credentials check)
    // BR: Autenticação fictícia para fins de MVP (sem backend real ou verificação de credenciais)
    function handleLogin(e) {
        e.preventDefault();

        // Minimal email format check / 
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(email)) {
            setFeedback({
                type: "error",
                title: "Invalid email",
                message: "Please enter a valid email address",
            });
            return;
        }

        if (!password.trim()) {
            setFeedback({
                type: "error",
                title: "Missing password",
                message: "Please enter a password"
            })
            return;
        }

        // Clear any previous error
        setFeedback(null);

        
        login();

        navigate(fromPath, {replace: true });
    }

    return (
        <PublicLayout>
            <h1>Login</h1>
            
            <form onSubmit={handleLogin}>
                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            { feedback ? (
                <Alert
                    type={feedback.type}
                    title={feedback.title}
                    message={feedback.message}
                    onClose={() => setFeedback(null)}
                />
            ) : null}

        </PublicLayout>
    );
}
