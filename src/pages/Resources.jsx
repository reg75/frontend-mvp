import { useParams } from "react-router-dom"

export default function Resources() {
    const { category } = useParams()

    return (
        <section>
            <h1>Resources</h1>
            {category ? (
                <p>Showing resources for category: <strong>{category}</strong></p>
            ) : (
                <p>Showing all resource categories</p>
            )}
            <p>This is the Resources page</p>
        </section>
    )
}