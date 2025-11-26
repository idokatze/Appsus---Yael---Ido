const hardCodedNotes = [
    {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: { backgroundColor: 'rgb(255, 127, 80)' }, // coral
        info: { txt: 'Fullstack Me Baby!' },
    },
    {
        id: 'n102',
        createdAt: 1112223,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: 'rgb(255, 218, 185)' }, // peach
        info: {
            url: 'https://source.unsplash.com/200x300/?kitten',
            title: 'Cute kitten inspiration',
        },
    },
    {
        id: 'n103',
        createdAt: 1112224,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: 'rgb(244, 164, 96)' }, // sand
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
        style: { backgroundColor: 'rgb(189, 252, 201)' }, // mint
        info: { txt: 'Remember to call mom' },
    },
    {
        id: 'n105',
        createdAt: 1112226,
        type: 'NoteImg',
        isPinned: true,
        style: { backgroundColor: 'rgb(188, 184, 138)' }, // sage
        info: {
            url: 'https://source.unsplash.com/200x300/?bear',
            title: 'Bear vibes',
        },
    },
    {
        id: 'n106',
        createdAt: 1112227,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: 'rgb(200, 162, 200)' }, // lilach
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
        style: { backgroundColor: 'rgb(255, 127, 80)' }, // coral
        info: { txt: 'Meeting at 10 AM tomorrow' },
    },
    {
        id: 'n108',
        createdAt: 1112229,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: 'rgb(255, 218, 185)' }, // peach
        info: {
            url: 'https://source.unsplash.com/200x300/?friends',
            title: 'Bobi and Me',
        },
    },
    {
        id: 'n109',
        createdAt: 1112230,
        type: 'NoteTodos',
        isPinned: true,
        style: { backgroundColor: 'rgb(244, 164, 96)' }, // sand
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
        // no color
        info: { txt: 'Dark mode test note' },
    },
    {
        id: 'n111',
        createdAt: 1112232,
        type: 'NoteImg',
        isPinned: false,
        // no color
        info: {
            url: 'https://source.unsplash.com/250x250/?kitten',
            title: 'Another kitten',
        },
    },
    {
        id: 'n112',
        createdAt: 1112233,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: 'rgb(189, 252, 201)' }, // mint
        info: {
            title: 'Chores',
            todos: [
                { txt: 'Laundry', isDone: false },
                { txt: 'Vacuum', isDone: true },
            ],
        },
    },
    {
        id: 'n113',
        createdAt: 1112234,
        type: 'NoteTxt',
        isPinned: true,
        // no color
        info: { txt: 'Pinned but no color' },
    },
    {
        id: 'n114',
        createdAt: 1112235,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: 'rgb(200, 162, 200)' }, // lilach
        info: {
            url: 'https://source.unsplash.com/300x200/?bear',
            title: 'Bear portrait',
        },
    },
    {
        id: 'n115',
        createdAt: 1112236,
        type: 'NoteTodos',
        isPinned: false,
        // no color
        info: {
            title: 'Study plan',
            todos: [
                { txt: 'Math practice', isDone: false },
                { txt: 'Read history', isDone: true },
            ],
        },
    },
    {
        id: 'n116',
        createdAt: 1112237,
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: 'rgb(188, 184, 138)' }, // sage
        info: { txt: 'Groceries reminder' },
    },
    {
        id: 'n117',
        createdAt: 1112238,
        type: 'NoteImg',
        isPinned: true,
        // no color
        info: {
            url: 'https://source.unsplash.com/220x220/?kitten',
            title: 'Pinned kitten',
        },
    },
    {
        id: 'n118',
        createdAt: 1112239,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: 'rgb(255, 127, 80)' }, // coral
        info: {
            title: 'Errands',
            todos: [
                { txt: 'Post office', isDone: false },
                { txt: 'Pick up package', isDone: true },
            ],
        },
    },
    {
        id: 'n119',
        createdAt: 1112240,
        type: 'NoteTxt',
        isPinned: false,
        // no color
        info: { txt: 'Quick thought: keep learning!' },
    },
    {
        id: 'n120',
        createdAt: 1112241,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: 'rgb(255, 218, 185)' }, // peach
        info: {
            url: 'https://source.unsplash.com/210x210/?bear',
            title: 'Bear closeup',
        },
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
