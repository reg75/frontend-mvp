import { useParams } from "react-router-dom"
import ProtectedLayout from "../components/layout/ProtectedLayout";

export default function Resources() {
    const { category } = useParams();

    const activeFilter = category || "all";

    return (
        <ProtectedLayout>
            <h1>Resources</h1>
            <p>This is the Resources page</p>
            <p>Active filter: {activeFilter}</p>
               
            
        </ProtectedLayout>
    )
}