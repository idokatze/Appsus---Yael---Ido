const { Link, NavLink, useLocation } = ReactRouterDOM

export function NoteHeader() {
    const { pathname } = useLocation()

    const headerClass = pathname.startsWith('/mail')
        ? 'mail-header'
        : 'app-header'

    return (
        <header className={headerClass}>
            <Link to="/">
                <h3>LOGO!</h3>
            </Link>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/mail">Mail</NavLink>
                <NavLink to="/note">Note</NavLink>
            </nav>
        </header>
    )
}
