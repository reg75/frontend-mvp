import { useNavigate } from "react-router-dom";
import Header from "./Header";
import NavbarLoggedIn from "./NavbarLoggedIn";
import { useAuth } from "../../services/auth.jsx";

export default function ProtectedLayout({children}) {
    const navigate = useNavigate();

    const { logout } = useAuth();

    function handleLogout() {
        logout();
        navigate("/");
    }
    
    return (
        <>
            <Header title="Edify">
                <NavbarLoggedIn onLogout={handleLogout} />
            </Header>
            <main className="container">
                {children}
            </main>
        </>
    );
}