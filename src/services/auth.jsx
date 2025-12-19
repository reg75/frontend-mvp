import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isAuthed, setIsAuthed] = useState(false);

    const login = () => setIsAuthed(true);
    const logout = () => setIsAuthed(false);

    const value = useMemo(() => ({ isAuthed, login, logout }), [isAuthed]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx
}