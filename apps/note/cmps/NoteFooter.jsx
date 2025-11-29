// NoteFooter.jsx
import { ColorModal } from "./ColorModal.jsx"
const { useState, useEffect } = React

export function NoteFooter({ note, onDelete, onChangeColor, onShare }) {
    const [isColorModalOpen, setIsColorModalOpen] = useState(false)
    const currentColor = note.style.backgroundColor

    function onSelectColor(color) {
        if (color !== note.style.backgroundColor) {
            onChangeColor(note.id, color)
        }
    }

    return (
        <footer className="note-footer">
            <button
                className="btn change-color"
                onClick={() => setIsColorModalOpen(true)}
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
                onClick={() => onShare(note)}
                title="Share note"
            >
                <i className="fa-solid fa-share"></i>
            </button>
            <button
                className="btn delete-note"
                onClick={() => onDelete(note.id)}
                title="Delete note"
            >
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </footer>
    )
}
