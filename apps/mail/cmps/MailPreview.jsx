import { utilService } from '../../../services/util.service.js'
const { useState } = React

export function MailPreview({ mail, onOpenMail, onStar }) {

    const { id, name, subject, sentAt, isRead, isStarred} = mail

    const handleStarClick = (ev) => {
        ev.stopPropagation()
        onStar(id, !isStarred)
    }

    return (
        <article onClick={() => onOpenMail(id)}
            className={`mail-preview ${isRead ? 'read-mail' : ''}`}>

            <div className="sender-section">
                <span className="star"
                    onClick={handleStarClick}
                ><i className={ `fa-regular fa-star ${isStarred ? 'on' : 'off'}`}></i>
                </span>

                <div className="sender-name-prev" >{name}</div>

            </div>

            <div className="mail-subject">{subject}</div>

            <div className="date-section">{utilService.getShortDate(sentAt)}</div>

        </article>
    )
}