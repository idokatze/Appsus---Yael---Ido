const { useState, useEffect, useRef } = React

export function EditNoteModal({ note, onClose, onSave }) {
    const modalRef = useRef(null)
    const [draftNote, setDraftNote] = useState(note)

    useEffect(() => {
        function handleClickOutside(ev) {
            if (modalRef.current && !modalRef.current.contains(ev.target)) {
                onClose()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [onClose])

    if (!note) return null

    function handleChange(field, value) {
        setDraftNote((prev) => ({
            ...prev,
            info: {
                ...prev.info,
                [field]: value,
            },
        }))
    }

    function handleTodoChange(index, value) {
        const newTodos = [...draftNote.info.todos]
        newTodos[index].txt = value
        setDraftNote((prev) => ({
            ...prev,
            info: { ...prev.info, todos: newTodos },
        }))
    }

    function handleImageChange(file) {
        setDraftNote((prev) => ({
            ...prev,
            info: { ...prev.info, txt: file },
        }))
    }

    function handleSave() {
        if (onSave) onSave(draftNote)
        onClose()
    }

    // Render different editors depending on type
    function renderEditor() {
        switch (draftNote.type) {
            case 'NoteTxt':
                return (
                    <label>
                        Content:
                        <textarea
                            value={draftNote.info.txt || ''}
                            onChange={(ev) =>
                                handleChange('txt', ev.target.value)
                            }
                        />
                    </label>
                )
            case 'NoteTodo':
                return (
                    <div>
                        {draftNote.info &&
                            draftNote.info.todos &&
                            draftNote.info.todos.map((todo, idx) => (
                                <div key={idx}>
                                    <input
                                        type="text"
                                        value={todo.txt}
                                        onChange={(e) => {
                                            const newTodos = [
                                                ...draftNote.info.todos,
                                            ]
                                            newTodos[idx] = {
                                                ...newTodos[idx],
                                                txt: e.target.value,
                                            }
                                            setDraftNote((prev) => ({
                                                ...prev,
                                                info: {
                                                    ...prev.info,
                                                    todos: newTodos,
                                                },
                                            }))
                                        }}
                                    />
                                </div>
                            ))}
                    </div>
                )
            case 'NoteImg':
                return (
                    <label>
                        Image:
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                handleImageChange(e.target.files[0])
                            }
                        />
                        {draftNote.info.txt && (
                            <img
                                src={
                                    typeof draftNote.info.txt === 'string'
                                        ? draftNote.info.txt
                                        : URL.createObjectURL(
                                              draftNote.info.txt
                                          )
                                }
                                alt={draftNote.info.title}
                            />
                        )}
                    </label>
                )
            default:
                return null
        }
    }

    return (
        <div className="modal-overlay">
            <div
                className="modal open-note-modal"
                ref={modalRef}
                style={note.style}
            >
                <label>
                    Title:
                    <input
                        type="text"
                        value={draftNote.info.title || ''}
                        onChange={(e) => handleChange('title', e.target.value)}
                    />
                </label>

                {renderEditor()}

                <div className="modal-actions">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

{
    /* <div
    className="modal open-note-modal"
    ref={modalRef}
    style={note.style}
>
    <h2>{title}</h2>
    {renderContent()}
    <div className="modal-actions">
        <button onClick={onClose}>Close</button>
    </div>
</div> */
}
