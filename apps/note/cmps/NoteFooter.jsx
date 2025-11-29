// NoteFooter.jsx
import { ColorModal } from './ColorModal.jsx'
import { ShareModal } from './ShareModal.jsx'
const { useState, useEffect } = React

export function NoteFooter({ note, onDelete, onChangeColor, onShare }) {
    const currentColor = note.style.backgroundColor
    const [isColorModalOpen, setIsColorModalOpen] = useState(false)
    const [isShareModalOpen, setIsShareModalOpen] = useState(false)

    function onSelectColor(color) {
        if (color !== note.style.backgroundColor) {
            onChangeColor(note.id, color)
        }
    }

    return (
        <footer className="note-footer">
            <button
                className="btn change-color"
                onClick={(ev) => {
                    ev.stopPropagation()
                    setIsColorModalOpen(true)
                }}
                title="Change background color"
            >
                <i className="fa-solid fa-palette"></i>
            </button>
            {isColorModalOpen && (
                <ColorModal
                    currentColor={note.style.backgroundColor}
                    onSelectColor={onSelectColor}
                    onClose={() => setIsColorModalOpen(false)}
                />
            )}

            <button
                className="btn share-note"
                onClick={(ev) => {
                    ev.stopPropagation()
                    setIsShareModalOpen(true)
                }}
                title="Share note"
            >
                <i className="fa-solid fa-share"></i>
            </button>

            {isShareModalOpen && (
                <ShareModal
                    note={note}
                    onClose={() => setIsShareModalOpen(false)}
                />
            )}

            <button
                className="btn delete-note"
                onClick={(ev) => {
                    ev.stopPropagation()
                    onDelete(note.id)
                }}
                title="Delete note"
            >
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </footer>
    )
}
