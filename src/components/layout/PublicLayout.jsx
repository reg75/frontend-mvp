import Header from "./Header";
import NavbarLoggedOut from "./NavbarLoggedOut";

export default function PublicLayout({ children }) {
    return (
        <>
            <Header title="Edify">
                <NavbarLoggedOut />
            </Header>

            <main className="container">
                {children}
            </main>
        </>
    );
}