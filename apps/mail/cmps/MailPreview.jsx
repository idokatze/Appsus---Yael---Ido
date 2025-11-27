import { utilService } from '../../../services/util.service.js'

export function MailPreview({ mail }) {

    const { from, subject, sentAt } = mail
    return (
        <article className="mail-preview">

            <div className="sender-section">{from}</div>

            <div className="mail-txt">{subject}</div>

            <div className="date-section">{utilService.getShortDate(sentAt)}</div>

        </article>
    )
}