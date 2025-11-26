export function NoteList({ notes, setNotes }) {
    console.log('notes:', notes)

    if (!notes.length) return (
        <div>No Notes</div>
    )
    return (
        <div className="notes-grid">
            {notes.map((note) => (
                <div key={note.id} className="note-card">
                    {/* <NotePreview note={note} /> */}
                    <p>note Id: {note.id}</p>
                </div>
            ))}
        </div>
    )
}
