import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Account from "./pages/Account"
import Login from "./pages/Login"
import Resources from "./pages/Resources"
import Virtues from "./pages/Virtues"
import NotFound from "./pages/NotFound"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:category" element={<Resources />} />
            <Route path="/virtues" element={<Virtues />}/>
        
            {/* 404 fallback */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}