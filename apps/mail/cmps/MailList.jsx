import { MailPreview } from "MailPreview.jsx"

export function MailList({ loadingClass, mails }) {

    if (!mails.length) return <div>No Mails To Show...</div>


    return (
        <section className="mail-display-section">
            <ul className="mail-list container">
                {
                    mails.map(mail => (
                        <li className={loadingClass} key={mail.id}>
                            <MailPreview mail={mail} />
                        </li>
                    ))
                }
            </ul >
        </section>

    )
}
