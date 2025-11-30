const { Link, NavLink } = ReactRouterDOM

export function MailHeader() {
    return (
        <header className="mail-header">
            <section className="header-left">
                {/* <i className="fa-solid fa-bars"></i> */}
                <img src="../../../img/gmail.jpg" alt="Mail Logo" />
                <div className="mail-logo-name">
                    Mail
                </div>
            </section>

            {/* <section className="search-area">Search Bar</section> */}

            <nav>
                <NavLink to="/note">
                    <img
                        src="./img/keep.jpg"
                        alt="Keep Logo"
                        className="nav-icon"
                    />
                </NavLink>
                <NavLink to="/">Home</ NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    )
}
