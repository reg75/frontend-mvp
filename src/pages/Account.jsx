import ProtectedLayout from "../components/layout/ProtectedLayout"

export default function Account() {
    return (
        <ProtectedLayout>
            <h1>Account</h1>
            <p>This is the Account page</p>
        </ProtectedLayout>
    )
}