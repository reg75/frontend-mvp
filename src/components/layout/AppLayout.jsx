import { useNavigate } from "react-router-dom";
import Header from "./Header";
import NavbarLoggedOut from "./NavbarLoggedOut";
import NavbarLoggedIn from "./NavbarLoggedIn";
import { useAuth } from "../../services/auth";

export default function AppLayout({ children }) {
    const navigate = useNavigate();
    const { isAuthed, logout } = useAuth();

    function handleLogout() {
        logout();
        navigate("/", { replace: true});
    }

    return (
        <>
            <Header title="Edify">
                {isAuthed ? (
                    <NavbarLoggedIn onLogout={handleLogout} />
                ) : (
                    <NavbarLoggedOut />
                )}
            </Header>
            
            <main className="container">{children}</main>
        </>
    );
}