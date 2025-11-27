import { NoteDisplay } from './NoteDisplay.jsx'
import { NoteFooter } from './NoteFooter.jsx'

function onChangeColor(noteId) {
    console.log('change color')
    // open color modal
    // set state with new color
}

function onShare(noteId) {
    console.log('share')
    // share modal (email, facebook, download)
}

export function NoteList({ notes, setNotes, onSelectNoteId, onRemoveNote }) {
    function togglePin(noteId) {
        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === noteId
                    ? { ...note, isPinned: !note.isPinned } // flip isPinned flag
                    : note
            )
        )
    }

    function onDelete(noteId) {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId))
    }

    if (!notes.length) return <div>No Notes</div>
    return (
        <div className="note-list">
            {notes.map((note) => (
                <div
                    key={note.id}
                    style={note.style}
                    className="note  note-card"
                >
                    <button
                        className="btn-pin"
                        onClick={() => togglePin(note.id)}
                    >
                        {note.isPinned ? (
                            <i className="pin fa-solid fa-thumbtack"></i>
                        ) : (
                            <i className="pin fa-solid fa-thumbtack unpinned"></i>
                        )}
                    </button>

                    <NoteDisplay note={note} />
                    <NoteFooter
                        note={note}
                        setNotes={setNotes}
                        onChangeColor={onChangeColor}
                        onShare={onShare}
                        onDelete={onDelete}
                    />
                </div>
            ))}
        </div>
    )
}
