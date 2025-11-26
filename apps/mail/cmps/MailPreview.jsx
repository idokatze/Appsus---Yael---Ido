import { utilService } from '../../../services/util.service.js'

export function MailPreview({ mail }) {

    const { from, subject, sentAt } = mail
    return (
        <article className="mail-preview">

            <div>{from}</div>

            <div>{subject}</div>

            <div>{utilService.getShortDate(sentAt)}</div>

        </article>
    )
}