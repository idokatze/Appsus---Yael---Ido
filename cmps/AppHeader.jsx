const { Link, NavLink, useLocation } = ReactRouterDOM

export function AppHeader() {
    const { pathname } = useLocation()

    let headerClass = 'app-header' // default

    if (pathname.startsWith('/mail')) {
        headerClass = 'mail-header'
    } else if (pathname.startsWith('/note')) {
        headerClass = 'note-header'
    } else if (pathname.startsWith('/about')) {
        headerClass = 'about-header'
    } else if (pathname === '/' || pathname.startsWith('/home')) {
        headerClass = 'home-header'
    }

    if (pathname.startsWith('/note')) {
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

    if (pathname.startsWith('/mail')) {
        return (
            <header className={`header ${headerClass}`}>
                <section className="header-left">
                    <i className="fa-solid fa-bars"></i>
                    <img src="./img/gmail.jpg" alt="Gmail Logo" />
                </section>

                <section className="search-area">Search Bar</section>

                <nav>
                    <NavLink to="/note">
                        <img
                            src="./img/keep.jpg"
                            alt="Keep Logo"
                            className="nav-icon"
                        />
                    </NavLink>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
        )
    }
}

//     return (
//         <header className={headerClass}>
//             <i class="fa-solid fa-bars"></i>
//             <Link to="/">
//                 {headerClass === 'note'} && ({img})
//                 <h3>LOGO!</h3>
//             </Link>
//             <nav>
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/about">About</NavLink>
//                 <NavLink to="/mail">Mail</NavLink>
//                 <NavLink to="/note">Note</NavLink>
//             </nav>
//         </header>
//     )
// }
