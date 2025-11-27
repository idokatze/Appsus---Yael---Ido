// NoteFooter.jsx

export function NoteFooter({ note, onDelete, onChangeColor, onShare }) {
    return (
        <footer className="note-footer">
            <button
                className="btn change-color"
                onClick={() => onChangeColor(note.id)}
                title="Change background"
            >
                <i className="fa-solid fa-palette"></i>
            </button>
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
