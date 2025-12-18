import React from "react"
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"
//import "./styles/global.css"

const domNode = document.getElementById("root")
console.log("root element: ", domNode)

const root = createRoot(domNode)

root.render(

    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>

)

