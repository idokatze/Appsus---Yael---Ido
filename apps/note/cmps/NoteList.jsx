import { NoteDisplay } from './NoteDisplay.jsx'

export function NoteList({ notes, setNotes }) {
    console.log('notes:', notes)

    if (!notes.length) return (
        <div>No Notes</div>
    )
    return (
        <div className="note-list">
            {notes.map((note) => (
                <div key={note.id} className="note-card">
                    <NoteDisplay note={note}/>
                    {/* <NotePreview note={note} /> */}
                </div>
            ))}
        </div>
    )
}
