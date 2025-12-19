import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../services/auth.jsx";

export default function ProtectedRoute({ children }) {
    const { isAuthed } = useAuth();
    const location = useLocation();

    if (!isAuthed) {
        // EN: Send to login / BR: 
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
}
