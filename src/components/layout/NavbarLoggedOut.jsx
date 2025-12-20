import NavLinkItem from "./NavLinkItem";

export default function NavbarLoggedOut() {
    return (
        <nav className="nav" aria-label="Primary navigation">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLinkItem to="/" label="Home" />
                </li>
                <li className="nav__item">
                    <NavLinkItem to="/virtues" label="Virtues" />
                </li>
                <li className="nav__item">
                    <NavLinkItem to="/login" label="Log in" variant="button" />
                </li>
            </ul>
        </nav>
    );
}