import { useParams } from "react-router-dom"

export default function Resources() {
    const { category } = useParams();

    const activeFilter = category || "all";

    return (
        <div>
            <h1>Resources</h1>
            <p>This is the Resources page</p>
            <p>Active filter: {activeFilter}</p>
               
            
        </div>
    )
}