
export function MailDetails({ mail, onBack }) {

    if (!mail) return <div>Loading...</div>

    const { name, sentAt, subject, body, from } = mail

    return (
        <section className="mail-details-screen">

            <div className="mail-subject">{subject}</div>

            <div className="mail-main">
                <img src="avatar.jpg" alt="Sender picture" className="avatar" />

                <div className="mail-details">

                    <div className="mail-header">

                        <div className="sender-details">
                            <div>
                                <div className="sender-name">{name}</div>
                                <div className="sender-email">&lt;{from}&gt;</div>                                
                            </div>

                            <time className="mail-date" dateTime=""> {sentAt}</time>

                        </div>
                    </div>

                    <article className="mail-body">{body}</article>

                </div>
            </div>
        </section>
    )
}