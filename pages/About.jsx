export function About() {
    return (
        <section className="about">
            <h1>About This Project</h1>
            <p>
                Created by <strong>Yael Matzek</strong> and{' '}
                <strong>Ido Katzenellenbogen</strong>.
            </p>
            <p>
                This React application replicates the core functionality and
                design of Google Keep and Gmail, showcasing modern front‑end
                development practices and user‑friendly design.
            </p>

            <h2>Tech Stack</h2>
            <ul className="tech-stack">
                <li>⚛️ React</li>
                <li>🎨 CSS Grid & Flexbox</li>
                <li>📧 Email & Notes UI</li>
                <li>⚡ Modern JavaScript (ES6+)</li>
            </ul>

            <h2>Go to Sites</h2>
            <div className="sites">
                <a href="/#/note" className="site-card">
                    <img src="/img/keep.jpg" alt="Notes App" />
                </a>
                <a href="/#/mail" className="site-card">
                    <img src="/img/gmail.jpg" alt="Mail App" />
                </a>
            </div>
        </section>
    )
}
