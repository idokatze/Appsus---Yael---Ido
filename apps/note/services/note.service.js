const hardCodedNotes = [
    {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: { backgroundColor: '#00d' },
        info: { txt: 'Fullstack Me Baby!' },
    },
    {
        id: 'n102',
        createdAt: 1112223,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: '#0d0' },
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me',
        },
    },
    {
        id: 'n103',
        createdAt: 1112224,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: '#d00' },
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', isDone: true },
                { txt: 'Coding power', isDone: false },
            ],
        },
    },
    {
        id: 'n104',
        createdAt: 1112225,
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#ffcc00' },
        info: { txt: 'Remember to call mom' },
    },
    {
        id: 'n105',
        createdAt: 1112226,
        type: 'NoteImg',
        isPinned: true,
        style: { backgroundColor: '#ccffcc' },
        info: {
            url: 'http://placekitten.com/200/300',
            title: 'Cute kitten inspiration',
        },
    },
    {
        id: 'n106',
        createdAt: 1112227,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: '#99ccff' },
        info: {
            title: 'Weekend tasks',
            todos: [
                { txt: 'Buy groceries', isDone: false },
                { txt: 'Clean apartment', isDone: false },
                { txt: 'Finish project', isDone: true },
            ],
        },
    },
    {
        id: 'n107',
        createdAt: 1112228,
        type: 'NoteTxt',
        isPinned: true,
        style: { backgroundColor: '#ff9999' },
        info: { txt: 'Meeting at 10 AM tomorrow' },
    },
    {
        id: 'n108',
        createdAt: 1112229,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: '#cc99ff' },
        info: {
            url: 'http://placebear.com/200/300',
            title: 'Bear vibes',
        },
    },
    {
        id: 'n109',
        createdAt: 1112230,
        type: 'NoteTodos',
        isPinned: true,
        style: { backgroundColor: '#66ffcc' },
        info: {
            title: 'Learning goals',
            todos: [
                { txt: 'React basics', isDone: true },
                { txt: 'Firebase setup', isDone: false },
                { txt: 'Deploy to Netlify', isDone: false },
            ],
        },
    },
    {
        id: 'n110',
        createdAt: 1112231,
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#333' },
        info: { txt: 'Dark mode test note' },
    },
]

import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'
export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter,
}

const NOTE_KEY = 'noteDB'

_createNotes()

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY).then((notes) => {
        //TODO = refactor

        // if (filterBy.text) {
        //     const regExp = new RegExp(filterBy.text, 'i')
        //     notes = notes.filter((note) => {
        //         return notes // TODO
        //     })
        // }

        // if (filterBy.price) {
        //     notes = notes.filter(
        //         (note) => note.listPrice.amount >= filterBy.price
        //     )
        // }

        return notes
    })
}

function get(noteId) {
    return storageService
        .get(NOTE_KEY, noteId)
        .then((note) => _setNextPrevNoteId(note))
}

function remove(noteId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote(type = 'NoteTxt') {
    const note = {
        id: '',
        createdAt: Date.now(),
        type,
        isPinned: false,
        style: { backgroundColor: '#ffffff' },
        info: {},
    }

    switch (type) {
        case 'NoteTxt':
            note.info = { txt: '' }
            break
        case 'NoteImg':
            note.info = { url: '', title: '' }
            break
        case 'NoteTodos':
            note.info = { title: '', todos: [] }
            break
    }

    return note
}

function getDefaultFilter() {
    return {
        text: '',
        type: 'all',
        isPinned: null,
        color: 'all',
    }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)

    if (!Array.isArray(notes) || notes.length === 0) {
        notes = _createNotesHardCoded()
        utilService.saveToStorage(NOTE_KEY, notes)
    }
    return notes
}

function _createNotesHardCoded() {
    // let idx = 1
    let newNotes = hardCodedNotes.map((note) => {
        // note.thumbnail = `../assets/img/notesImages/${idx}.jpg`
        // note.reviews = []
        // idx++
        return note
    })
    console.log('newNotes', newNotes)
    return newNotes
}

function _createNote(title = '', price = '') {
    const note = getEmptyNote()
    // note.id = makeId()
    return note
}

// function _setNextPrevNoteId(note) {
//     return query().then((notes) => {
//         const noteIdx = notes.findIndex((currNote) => currNote.id === note.id)
//         const nextNote = notes[noteIdx + 1] ? notes[noteIdx + 1] : notes[0]
//         const prevNote = notes[noteIdx - 1]
//             ? notes[noteIdx - 1]
//             : notes[notes.length - 1]
//         note.nextNoteId = nextNote.id
//         note.prevNoteId = prevNote.id
//         return note
//     })
// }
