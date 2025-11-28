import { NoteList } from '../cmps/NoteList.jsx'
import { NewNote } from '../cmps/NewNote.jsx'

import {
    showErrorMsg,
    showSuccessMsg,
} from '../../../services/event-bus.service.js'
import { noteService } from '../services/note.service.js'

const { useState, useEffect } = React

export function NoteIndex() {
    const [selectedNoteId, setSelectedNoteId] = useState(null)
    // const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem('notes')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function loadNotes() {
        noteService
            .query(filterBy)
            .then(setNotes)
            .catch((err) => {
                console.error('Failed to load notes:', err)
                showErrorMsg('Cannot load notes')
            })
    }

    function onAddNote({ title, txt, type }) {
        console.log('onAddNote called with:', { title, txt, type })

        const newNote = noteService.getEmptyNote(
            type === 'text'
                ? 'NoteTxt'
                : type === 'img'
                ? 'NoteImg'
                : type === 'todo'
                ? 'NoteTodos'
                : 'NoteTxt'
        )

        switch (newNote.type) {
            case 'NoteTxt':
                newNote.info.title = title
                newNote.info.txt = txt
                break

            case 'NoteImg':
                const url = txt instanceof File ? URL.createObjectURL(txt) : txt
                newNote.info.title = title
                newNote.info.url = url
                break

            case 'NoteTodos':
                newNote.info.title = title
                newNote.info.todos = [{ txt, isDone: false }]
                break
        }

        console.log('newNote:', newNote)

        setNotes((prevNotes) => {
            console.log('prevNotes before update:', prevNotes)
            const updated = [newNote, ...prevNotes]
            console.log('updated notes array:', updated)
            return updated
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

    const [filterBy, setFilterBy] = useState({ txt: '' })

    function getFilteredNotes(notes, filterBy) {
        if (!filterBy || !filterBy.txt) return notes
        return notes.filter(
            (note) =>
                note.info.title
                    .toLowerCase()
                    .includes(filterBy.txt.toLowerCase()) ||
                (note.info.txt &&
                    note.info.txt
                        .toLowerCase()
                        .includes(filterBy.txt.toLowerCase()))
        )
    }

    function onSetFilter(newFilterBy) {
        setFilterBy((prevFilter) => ({ ...prevFilter, ...newFilterBy }))
    }

    return (
        <section className="note-index">
            {/* Future: <SideBar /> */}
            {/* Future: <NoteFilter defaultFilter={filterBy} onSetFilter={onSetFilter} /> */}
            <div className="placeholder">Placeholder</div>
            <NewNote onAddNote={onAddNote} />
            <NoteList
                notes={getFilteredNotes(notes, filterBy)}
                setNotes={setNotes}
                onSelectNoteId={onSelectNoteId}
                onRemoveNote={onRemoveNote}
            />
        </section>
    )
}
