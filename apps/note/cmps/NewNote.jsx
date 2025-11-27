// import { debounce } from '../../../services/util.service.js'
const { useState, useEffect, useRef } = React

export function NewNote({ onAddNote }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const modalRef = useRef(null)

    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    function handleSubmit() {
        if (!modalRef.current) return
        const title = modalRef.current.querySelector('[name="title"]').value
        const txt = modalRef.current.querySelector('[name="txt"]').value
        
        // only save if something was entered
        if (title.trim() || txt.trim()) {
            onAddNote({ title, txt })
        }
        closeModal()
        modalRef.current.querySelector('[name="title"]').value = ''
        modalRef.current.querySelector('[name="txt"]').value = ''
    }

    useEffect(() => {
        function handleClickOutside(ev) {
            if (modalRef.current && !modalRef.current.contains(ev.target)) {
                handleSubmit()
            }
        }
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isModalOpen])

    return (
        <React.Fragment>
            {!isModalOpen && (
                <div className="fake-new-note" onClick={openModal}>
                    <div className="fake-text">Take a note..</div>
                    <div className="fake-icons">
                        <i className="fa-solid fa-square-check"></i>
                        <i className="fa-solid fa-paintbrush"></i>
                        <i className="fa-regular fa-image"></i>
                    </div>
                </div>
            )}

            {isModalOpen && (
                <div className="modal" ref={modalRef}>
                    <form className="new-note-form">
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter a title..."
                        />
                        <textarea
                            name="txt"
                            placeholder="Write your note here..."
                        />
                    </form>
                </div>
            )}
        </React.Fragment>
    )
}
