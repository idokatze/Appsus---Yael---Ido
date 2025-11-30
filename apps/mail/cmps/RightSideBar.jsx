// import { NewMail } from "./NewMail.jsx"

const { useState, useEffect } = React

export function RightSideBar({ defaultFilter, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...defaultFilter })

    function handleStatusChange(status) {
        setFilterByToEdit(prevFilter =>
            ({ ...prevFilter, status, isStarred: false }))
    }

    function onShowStarred() {
        setFilterByToEdit(prevFilter => ({
            ...prevFilter,
            status: '',
            isStarred: true
        }))
    }

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    return (
        <section className="right-sidebar">
            {/* <div className="side-nav-btn compose-btn">
                <i className="fa-solid fa-pencil"></i>
                <p>Compose</p>
            </div> */}

            <div className={`side-nav-btn inbox-btn ${filterByToEdit.status === 'inbox' ? 'active' : ''}`}
                onClick={() => handleStatusChange('inbox')}
                title="Inbox">
                <i className="fa-solid fa-inbox"></i>
                <p>Inbox</p>
            </div>

            <div className={`side-nav-btn starred-btn ${filterByToEdit.isStarred ? 'active' : ''}`}
                title="Starred"
                onClick={onShowStarred}>
                <i className="fa-regular fa-star"></i>
                <p>Starred</p>
            </div>

            <div className={`side-nav-btn sent-btn ${filterByToEdit.status === 'sent' ? 'active' : ''}`}
                title="Sent"
                onClick={() => handleStatusChange('sent')}>
                <i className="fa-regular fa-paper-plane"></i>
                <p>Sent</p>
            </div>

            <div className={`side-nav-btn draft-btn ${filterByToEdit.status === 'draft' ? 'active' : ''}`}
                title="Draft"
                onClick={() => handleStatusChange('draft')}>
                <i className="fa-regular fa-note-sticky"></i>
                <p>Draft</p>
            </div>

            <div className={`side-nav-btn trash-btn ${filterByToEdit.status === 'trash' ? 'active' : ''}`}
                title="Bin"
                onClick={() => handleStatusChange('trash')}>
                <i className="fa-regular fa-trash-can"></i>
                <p>Bin</p>
            </div>
        </section>
    )
}