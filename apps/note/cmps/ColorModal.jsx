const colors = [
    { name: 'white', value: 'rgb(255, 255, 255)' },
    { name: 'coral', value: 'rgb(255, 127, 80)' },
    { name: 'peach', value: 'rgb(255, 218, 185)' },
    { name: 'sand', value: 'rgb(244, 164, 96)' },
    { name: 'mint', value: 'rgb(189, 252, 201)' },
    { name: 'sage', value: 'rgb(188, 184, 138)' },
    { name: 'lilac', value: 'rgb(200, 162, 200)' },
]

export function ColorModal({ currentColor, onSelectColor, onClose }) {
    function handleOverlayClick(ev) {
        ev.stopPropagation()
        onClose()
    }

    function handleColorClick(ev, colorValue) {
        ev.stopPropagation()
        onSelectColor(colorValue)
        onClose() // optional: close after selecting
    }

    return (
        <div className="color-modal-overlay" onClick={handleOverlayClick}>
            <div className="color-modal" onClick={(ev) => ev.stopPropagation()}>
                {colors.map(({ name, value }) => {
                    const isSelected = currentColor === value
                    return (
                        <div
                            key={name}
                            className={`color-circle ${name}${
                                isSelected ? ' selected' : ''
                            }`}
                            onClick={(ev) => handleColorClick(ev, value)}
                        />
                    )
                })}
            </div>
        </div>
    )
}
