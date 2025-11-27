// NoteFooter.jsx

export function NoteFooter({ note, onDelete, onChangeColor, onShare }) {
    return (
        <footer className="note-footer">
            <button
                className="btn change-color"
                onClick={() => onChangeColor(note.id)}
                title="Change background"
            >
                🎨
            </button>
            <button
                className="btn share-note"
                onClick={() => onShare(note)}
                title="Share note"
            >
                🔗
            </button>
            <button
                className="btn delete-note"
                onClick={() => onDelete(note.id)}
                title="Delete note"
            >
                🗑️
            </button>
        </footer>
    )
}
