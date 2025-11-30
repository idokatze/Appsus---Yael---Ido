import { MailHeader } from "../apps/mail/cmps/MailHeader.jsx"

const { Link, NavLink, useLocation } = ReactRouterDOM

export function AppHeader() {
    const { pathname } = useLocation()

    let headerClass

    if (pathname.startsWith('/mail')) {
        headerClass = 'mail-header'
    } else if (pathname.startsWith('/note')) {
        headerClass = 'note-header'}


    if (headerClass === 'note-header') {
        return (
            <header className={`header ${headerClass}`}>
                <section className="header-left">
                    <img src="./img/keep.jpg" alt="Keep Logo" />
                </section>

                <section className="search-area"></section>

                <nav>
                    <NavLink to="/mail">
                        <img
                            src="./img/gmail.jpg"
                            alt="Gmail Logo"
                            className="nav-icon"
                        />
                    </NavLink>
                    <NavLink to="/">
                        <i className="fa-solid fa-house"></i>
                    </NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
        )
    }

    if (headerClass === 'mail-header') {
        return (
            <MailHeader />
        )
    }
}
