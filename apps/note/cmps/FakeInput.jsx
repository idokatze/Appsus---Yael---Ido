export function FakeInput({ isModalOpen, openModal }) {
    return (
        <React.Fragment>
            {!isModalOpen && (
                <div
                    className="fake-new-note new-text-modal"
                    onClick={() => openModal('text')}
                >
                    <div className="fake-text">Take a note..</div>
                    <div className="fake-icons">
                        <i
                            className="fa-solid fa-square-check new-todo-modal"
                            onClick={(ev) => {
                                ev.stopPropagation()
                                openModal('todo')
                            }}
                        ></i>
                        <i
                            className="fa-regular fa-image new-img-modal"
                            onClick={(ev) => {
                                ev.stopPropagation()
                                openModal('img')
                            }}
                        ></i>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
