// import { debounce } from '../../../services/util.service.js'
import { NewNoteModal } from '../cmps/NewNoteModal.jsx'
import { FakeInput } from './FakeInput.jsx'
const { useState, useEffect, useRef } = React

export function NewNote({ onAddNote }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [noteType, setNoteType] = useState(null)
    const modalRef = useRef(null)

    const openModal = (type) => {
        setIsModalOpen(true)
        setNoteType(type)
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    return (
        <React.Fragment>
            {!isModalOpen && (
                <FakeInput isModalOpen={isModalOpen} openModal={openModal} />
            )}
            {isModalOpen && (
                <NewNoteModal
                    noteType={noteType}
                    onAddNote={onAddNote}
                    closeModal={closeModal}
                />
            )}
        </React.Fragment>
    )
}
