export function Home() {
    return (
        <section className="home">
            <h1>Welcome</h1>
            <p>Replicating Google Keep & Gmail with React</p>

            <div className="home-sites">
                <a href="/#/note" className="site-card">
                    <img src="/img/keep.jpg" alt="Google Keep" />
                    <span>Notes</span>
                </a>
                <a href="/#/mail" className="site-card">
                    <img src="/img/gmail.jpg" alt="Gmail" />
                    <span>Mail</span>
                </a>
            </div>

            <div className="about-link">
                <a href="/#/about" className="btn">
                    Read About the Project
                </a>
            </div>
        </section>
    )
}
