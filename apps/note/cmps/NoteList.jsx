import { NoteDisplay } from './NoteDisplay.jsx'
import { NoteFooter } from './NoteFooter.jsx'
import { EditNoteModal } from './EditNoteModal.jsx'

const { useState, useEffect, useRef } = React

export function NoteList({ notes, setNotes, onSelectNoteId }) {
    const [openNote, setOpenNote] = useState(null)
    function onChangeColor(noteId, color) {
        setNotes((prevNotes) =>
            prevNotes.map((note) => {
                if (note.id === noteId) {
                    return {
                        ...note,
                        style: {
                            ...note.style,
                            backgroundColor: color,
                        },
                    }
                }
                return note
            })
        )
    }

    function onShare(noteId) {
        console.log('share')
        // share modal (email, facebook, download)
    }
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
        <div className="notes-container">
            <h4 className="pinned-title">Pinned</h4>
            <div className="note-list pinned">
                {notes
                    .filter((note) => note.isPinned)
                    .map((note) => (
                        <div
                            key={note.id}
                            style={note.style}
                            className="note  note-card"
                            onClick={() => {
                                setOpenNote(note)
                                console.log('openNote state set', note)
                            }}
                        >
                            <button
                                className="btn-pin"
                                onClick={(ev) => {
                                    ev.stopPropagation()
                                    togglePin(note.id)
                                }}
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
            <h4 className="pinned-title">Unpinned</h4>
            <div className="note-list unpinned">
                {notes
                    .filter((note) => !note.isPinned)
                    .map((note) => (
                        <div
                            key={note.id}
                            style={note.style}
                            className="note note-card"
                            onClick={() => setOpenNote(note)} // card click opens modal
                        >
                            <button
                                className="btn-pin"
                                onClick={(ev) => {
                                    ev.stopPropagation()
                                    togglePin(note.id)
                                }}
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

            {openNote && (
                <EditNoteModal
                    note={openNote}
                    onClose={() => setOpenNote(null)}
                    onSave={(updatedNote) => {
                        // update notes state
                        setNotes((prevNotes) =>
                            prevNotes.map((n) =>
                                n.id === updatedNote.id ? updatedNote : n
                            )
                        )
                    }}
                />
            )}
        </div>
    )
}
