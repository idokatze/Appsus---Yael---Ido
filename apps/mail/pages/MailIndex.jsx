import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { MailDetails } from "../pages/MailDetails.jsx"
import { RightSideBar } from "../cmps/RightSideBar.jsx"
import { LeftSideBar } from "../cmps/LeftSideBar.jsx"

const { useState, useEffect } = React
const { Link, useSearchParams, useNavigate } = ReactRouterDOM

export function MailIndex() {

    const [mails, setMails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [selectedMail, setSelectedMail] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        loadMails()
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy)
            .then(mails => setMails(mails))
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onSetFilter(newFilterBy) {
        setFilterBy(filterBy => ({ ...filterBy, ...newFilterBy }))
        setSelectedMail(null)
    }

    function onOpenMail(mailId) {
        setMails(mails =>
            mails.map(mail => mail.id === mailId ?
                { ...mail, isRead: true } : mail))

        mailService.markAsRead(mailId).catch(err => {
            console.error("Failed to mark as read:", err)
        })

        mailService.get(mailId).then(mail => {
            setSelectedMail(mail)})
            .catch(err => {
            console.error("Failed to load mail:", err);
        })

    }

    const onBack = () => setSelectedMail(null);

    if (!mails) return <div className="loader">Loading...</div>

    const loadingClass = isLoading ? 'loading' : ''

    return (
        <section className="mail-index">
            <RightSideBar
                defaultFilter={filterBy}
                onSetFilter={onSetFilter}
            />
            {selectedMail ?
                (<MailDetails
                    mail={selectedMail}
                    onBack={onBack} />)
                : (
                    <MailList
                        loadingClass={loadingClass}
                        mails={mails}
                        onOpenMail={onOpenMail}
                        onSelectMail={setSelectedMail}
                    />)
            }
            <LeftSideBar />
        </section>

    )
}

