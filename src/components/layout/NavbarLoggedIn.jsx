import NavLinkItem from "./NavLinkItem";

export default function NavbarLoggedIn({ onLogout }) {
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
                    <NavLinkItem to="/resources" label="Resources" />
                </li>
                <li className="nav__item">
                    <NavLinkItem to="/account" label="Account" />
                </li>
                <li className="nav__item">
                    <button
                        type="button"
                        className="nav__button"
                        onClick={onLogout}
                    >
                        Log out
                    </button>
                </li>
            </ul>
        </nav>
    );
}