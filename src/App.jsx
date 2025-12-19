import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Account from "./pages/Account"
import Login from "./pages/Login"
import Resources from "./pages/Resources"
import Virtues from "./pages/Virtues"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/virtues" element={<Virtues />}/>
            <Route path="/login" element={<Login />} />
            
            <Route path="/account" element={
                <ProtectedRoute><Account /></ProtectedRoute>
                } 
            />
            
            <Route path="/resources" element={
                <ProtectedRoute>
                    <Resources />
                </ProtectedRoute>
                } 
            />
            
            <Route path="/resources/:category" element={
                <ProtectedRoute>
                    <Resources />
                </ProtectedRoute>
                } 
            />
            
            {/* EN: 404 fallback / BR:  */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}