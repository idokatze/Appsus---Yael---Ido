export function NoteDisplay({ note }) {
    const type = note.type
    switch (note.type) {
        case 'NoteTxt':
            return (
                <div className="note-text">
                    <p>{note.info.txt}</p>
                </div>
            )

        case 'NoteImg':
            return (
                <div className="note-img">
                    <h4>{note.info.title}</h4>
                    <img src={note.info.url} alt={note.info.title} />
                </div>
            )
        case 'NoteTodos':
            return (
                <div className="note-todos">
                    <h4>{note.info.title}</h4>
                    <ul>
                        {note.info.todos.map((todo, idx) => (
                            <li
                                style={{
                                    textDecoration: todo.isDone
                                        ? 'line-through'
                                        : 'none',
                                }}
                                key={idx}
                            >
                                {todo.txt}
                            </li>
                        ))}
                    </ul>
                </div>
            )
    }
}
