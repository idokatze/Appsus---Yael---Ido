export function NewNoteModal({ noteType, onAddNote, closeModal }) {
    const modalRef = React.useRef(null)

    function handleSubmit() {
        if (!modalRef.current) return
        const title = modalRef.current.querySelector('[name="title"]').value
        const txt = modalRef.current.querySelector('[name="txt"]').value

        if (title.trim() || txt.trim()) {
            onAddNote({ title, txt, type: noteType })
        }
        closeModal()

        // clear fields
        modalRef.current.querySelector('[name="title"]').value = ''
        if (modalRef.current.querySelector('[name="txt"]')) {
            modalRef.current.querySelector('[name="txt"]').value = ''
        }
    }

    React.useEffect(() => {
        function handleClickOutside(ev) {
            if (modalRef.current && !modalRef.current.contains(ev.target)) {
                handleSubmit()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // dynamic rendering
    switch (noteType) {
        case 'text':
            return (
                <div className="modal" ref={modalRef}>
                    <form
                        className="new-note-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}
                    >
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter a title..."
                            className="note-title-input"
                        />
                        <textarea
                            name="txt"
                            className="note-textarea"
                            placeholder="Write your note here..."
                            onInput={(e) => {
                                e.target.style.height = 'auto'
                                e.target.style.height = `${e.target.scrollHeight}px`
                            }}
                            autoFocus
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            )

        case 'todo':
            return (
                <div className="modal" ref={modalRef}>
                    <form
                        className="new-note-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}
                    >
                        <input
                            type="text"
                            name="title"
                            placeholder="Todo title..."
                            className="note-title-input"
                        />
                        <input
                            type="text"
                            name="txt"
                            placeholder="Enter a todo item..."
                            className="note-todo-input"
                            autoFocus
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            )

        case 'img':
            return (
                <div className="modal" ref={modalRef}>
                    <form
                        className="new-note-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}
                    >
                        <input
                            type="text"
                            name="title"
                            placeholder="Image title..."
                            className="note-title-input"
                        />
                        <input
                            type="url"
                            name="txt"
                            placeholder="Paste image URL..."
                            className="note-img-input"
                            autoFocus
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            )

        default:
            return null
    }
}
