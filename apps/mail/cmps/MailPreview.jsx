import { utilService } from '../../../services/util.service.js'

export function MailPreview({ mail, onOpenMail }) {

    const { id, name, subject, sentAt, isRead } = mail

    return (
        <article onClick={() => onOpenMail(id)} 
        className= {`mail-preview ${isRead? 'read-mail': ''}`}>

            <div className="sender-section">{name}</div>

            <div className="mail-subject">{subject}</div>

            <div className="date-section">{utilService.getShortDate(sentAt)}</div>

        </article>
    )
}