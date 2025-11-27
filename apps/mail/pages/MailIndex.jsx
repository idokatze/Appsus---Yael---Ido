import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { RightSideBar } from "../cmps/RightSideBar.jsx"
import { LeftSideBar } from "../cmps/LeftSideBar.jsx"

const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM


export function MailIndex() {

    const [mails, setMails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        loadMails()
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy)
            .then(mails => setMails(mails))
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Cannot get mails!')
            })
    }

    function onSetFilter(newFilterBy) {
        setFilterBy(filterBy => ({ ...filterBy, ...newFilterBy }))
    }

    function onOpenMail(mailId) {

        setMails(mails =>
            mails.map(mail => mail.id === mailId ?
                { ...mail, isRead: true } : mail)
        )

        mailService.markAsRead(mailId)
    }

    if (!mails) return <div className="loader">Loading...</div>

    const loadingClass = isLoading ? 'loading' : ''

    return (
        <section className="mail-index">
            <RightSideBar
                defaultFilter={filterBy}
                onSetFilter={onSetFilter}
            />
            <MailList
                loadingClass={loadingClass}
                mails={mails}
                onOpenMail={onOpenMail} />
            <LeftSideBar />
        </section>

    )
}

