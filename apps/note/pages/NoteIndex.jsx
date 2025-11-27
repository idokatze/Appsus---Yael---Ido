import { NoteList } from '../cmps/NoteList.jsx'
import {
    showErrorMsg,
    showSuccessMsg,
} from '../../../services/event-bus.service.js'
import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState([])
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    const [selectedNoteId, setSelectedNoteId] = useState(null)

    useEffect(() => {
        loadNotes()
    }, [filterBy])

    function loadNotes() {
        noteService
            .query(filterBy)
            .then(setNotes)
            .catch((err) => {
                console.error('Failed to load notes:', err)
                showErrorMsg('Cannot load notes')
            })
    }

    function onRemoveNote(noteId) {
        noteService
            .remove(noteId)
            .then(() => {
                setNotes((prevNotes) =>
                    prevNotes.filter((note) => note.id !== noteId)
                )
                showSuccessMsg(`Note removed successfully (${noteId})`)
            })
            .catch((err) => {
                console.error('Failed to remove note:', err)
                showErrorMsg('Cannot remove note')
            })
    }

    function onSelectNoteId(noteId) {
        setSelectedNoteId(noteId)
    }

    function onSetFilter(newFilterBy) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...newFilterBy }))
    }

    return (
        <section className="note-index">
            {/* Future: <SideBar /> */}
            {/* Future: <NoteFilter defaultFilter={filterBy} onSetFilter={onSetFilter} /> */}
            <div className="placeholder">Placeholder</div>

            <NoteList
                notes={notes}
                setNotes={setNotes}
                onSelectNoteId={onSelectNoteId}
                onRemoveNote={onRemoveNote}
            />
        </section>
    )
}
