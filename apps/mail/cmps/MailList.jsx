import { MailPreview } from "MailPreview.jsx"

export function MailList({ loadingClass, mails, onOpenMail }) {

    if (!mails.length) return <div>No Mails To Show...</div>

    return (
        <section className="mail-display-section container">
            <ul className="mail-list">
                {
                    mails.map(mail => (
                        <li className={loadingClass} key={mail.id} >
                            <MailPreview mail={mail} onOpenMail={onOpenMail} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
