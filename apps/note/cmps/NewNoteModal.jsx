const { useState, useEffect, useRef } = React

export function NewNoteModal({ noteType, onAddNote, closeModal }) {
    const modalRef = useRef(null)
    const [title, setTitle] = useState('')
    const [txt, setTxt] = useState('')
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [color, setColor] = useState('rgb(255, 255, 255)') // default white

    function handleSubmit() {
        if (!title.trim() && !txt && !file) {
            closeModal()
            return
        }

        const payload = {
            title,
            txt: noteType === 'img' ? file : txt,
            type: noteType,
            style: { backgroundColor: color },
        }

        onAddNote(payload)
        closeModal()

        // reset state
        setTitle('')
        setTxt('')
        setFile(null)
        setPreview(null)
    }

    useEffect(() => {
        function handleClickOutside(ev) {
            if (modalRef.current && !modalRef.current.contains(ev.target)) {
                handleSubmit()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [title, txt, file])

    function handleFileChange(ev) {
        const selectedFile = ev.target.files[0]
        if (selectedFile) {
            setFile(selectedFile)
            setPreview(URL.createObjectURL(selectedFile))
        }
    }

    return (
        <div
            className="modal"
            ref={modalRef}
            style={{ backgroundColor: color }}
        >
            <form
                className="new-note-form"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}
            >
                {noteType === 'text' && (
                    <React.Fragment>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter a title..."
                            className="note-title-input"
                            value={title}
                            style={{ backgroundColor: color }}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            name="txt"
                            className="note-textarea"
                            placeholder="Write your note here..."
                            autoFocus
                            value={txt}
                            style={{ backgroundColor: color }}
                            onChange={(e) => setTxt(e.target.value)}
                        />
                    </React.Fragment>
                )}

                {noteType === 'todo' && (
                    <React.Fragment>
                        <input
                            type="text"
                            name="title"
                            placeholder="Todo title..."
                            className="note-title-input"
                            value={title}
                            style={{ backgroundColor: color }}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            name="txt"
                            placeholder="Enter a todo item..."
                            className="note-todo-input"
                            autoFocus
                            value={txt}
                            style={{ backgroundColor: color }}
                            onChange={(e) => setTxt(e.target.value)}
                        />
                    </React.Fragment>
                )}

                {noteType === 'img' && (
                    <React.Fragment>
                        <input
                            type="file"
                            name="txt"
                            accept="image/*"
                            style={{ backgroundColor: color }}
                            onChange={handleFileChange}
                        />
                        {preview && <img src={preview} alt="preview" />}
                        <input
                            type="text"
                            name="title"
                            placeholder="Image title..."
                            className="note-title-input"
                            value={title}
                            style={{ backgroundColor: color }}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </React.Fragment>
                )}

                {/* 👇 Swatches always at the bottom */}
                <div className="color-swatch-row">
                    {[
                        { name: 'white', value: 'rgb(255, 255, 255)' },
                        { name: 'coral', value: 'rgb(255, 127, 80)' },
                        { name: 'peach', value: 'rgb(255, 218, 185)' },
                        { name: 'sand', value: 'rgb(244, 164, 96)' },
                        { name: 'mint', value: 'rgb(189, 252, 201)' },
                        { name: 'sage', value: 'rgb(188, 184, 138)' },
                        { name: 'lilac', value: 'rgb(200, 162, 200)' },
                    ].map((c) => (
                        <div
                            key={c.name}
                            className={`color-circle ${c.name} ${
                                color === c.value ? 'selected' : ''
                            }`}
                            onClick={() => setColor(c.value)}
                        ></div>
                    ))}
                </div>
            </form>
        </div>
    )
}
