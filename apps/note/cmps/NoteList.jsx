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

function onDelete(noteId) {
    console.log('delete')
    // crudl
    // setState
}

export function NoteList({ notes, setNotes }) {
    console.log('notes:', notes)

    if (!notes.length) return <div>No Notes</div>
    return (
        <div className="note-list">
            {notes.map((note) => (
                <div key={note.id} style={note.style} className="note  note-card">
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
