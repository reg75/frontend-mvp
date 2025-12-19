export default function Header({ title = "Edify", children }) {
    return(
        <header className="header">
            <div className="header__inner">
                <div className="header__brand">
                    <span className="header__logo" aria-hidden="true">🌱</span>
                    <span className="header__title">{title}</span>
                </div>

                {children}
            </div>
        </header>
    )
}