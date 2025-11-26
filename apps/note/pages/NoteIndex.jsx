import { AppHeader } from '../../../cmps/AppHeader.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import { noteService } from '../services/note.service.js'

// import { NoteFilter } from '../cmps/NoteFilter.jsx'
// import { NoteList } from '../cmps/NoteList.jsx'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
// import { NoteDetails } from './NoteDetails.jsx'

const { useState, useEffect } = React

export function NoteIndex({}) {
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
                console.log('err:', err)
            })
    }

    function onRemoveNote(noteId) {
        noteService
            .remove(noteId)
            .then(() => {
                console.log('noteId:', noteId)
                setNotes((notes) => notes.filter((note) => note.id !== noteId))
                showSuccessMsg(`Note removed successfully (${noteId})`)
            })
            .catch((err) => {
                console.log('err:', err)
                showErrorMsg('Cannot remove note')
            })
    }

    function onSelectNoteId(noteId) {
        setSelectedNoteId(noteId)
    }

    function onSetFilter(newFilterBy) {
        setFilterBy((filterBy) => ({ ...filterBy, ...newFilterBy }))
    }

    //useEffect load notes arrow function

    // const addNote = (note) => setNotes([...notes, note])
    return (
        <section className="note-index">
            {/* <React.Fragment> */}
            {/* <AppHeader /> */}

            {/* <NoteFilter
                    defaultFilter={filterBy}
                    onSetFilter={onSetFilter}
                /> */}

            <NoteList
                notes={notes}
                onSelectNoteId={onSelectNoteId}
                onRemoveNote={onRemoveNote}
            />
                {/* <SideBar /> */}
            {/* </React.Fragment> */}
        </section>
    )
}
