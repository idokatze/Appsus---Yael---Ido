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
            <div className="side-nav-btn compose-btn">
                <i className="fa-solid fa-pencil"></i>Compose</div>

            <div className="side-nav-btn inbox-btn"
                onClick={() => handleStatusChange('inbox')}
                title="Inbox">
                <i className="fa-solid fa-inbox"></i>
                Inbox
            </div>

            <div className="side-nav-btn starred-btn"
            title="Starred"
                onClick={onShowStarred}>
                <i className="fa-regular fa-star"></i>
                Starred
            </div>

            <div className="side-nav-btn sent-btn"
            title="Sent"
                onClick={() => handleStatusChange('sent')}>
                <i className="fa-regular fa-paper-plane"></i>
                Sent
            </div>

            <div className="side-nav-btn draft-btn"
            title="Draft"
                onClick={() => handleStatusChange('draft')}>
                <i className="fa-regular fa-note-sticky"></i>Draft</div>

            <div className="side-nav-btn trash-btn"
            title="Bin"
                onClick={() => handleStatusChange('trash')}>
                <i className="fa-regular fa-trash-can"></i>Bin</div>
        </section>
    )
}