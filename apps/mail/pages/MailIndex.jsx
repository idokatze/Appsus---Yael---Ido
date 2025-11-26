import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

export function MailIndex() {

    const [mails, setMails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query()
            .then(mails => setMails(mails))
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Cannot get mails!')
            })
    }

    if (!mails) return <div className="loader">Loading...</div>
    console.log('mails:', mails)
    const loadingClass = isLoading ? 'loading' : ''

    return (
        <section className="mail-index">
            <MailList loadingClass={loadingClass} mails={mails}/>            
        </section>

    )
}

