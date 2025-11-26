const { Link, NavLink, useLocation } = ReactRouterDOM

export function AppHeader() {

    const { pathname } = useLocation()

    return <header className={pathname === '/mail'? 'mail-header':'app-header'}>
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
}
