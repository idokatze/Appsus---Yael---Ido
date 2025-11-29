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
    return (
        <div className="color-modal-overlay" onClick={onClose}>
            <div
                className="color-modal"
                onClick={(ev) => ev.stopPropagation()} // prevent closing when clicking inside
            >
                {colors.map((color) => (
                    <div
                        key={color.name}
                        className={`color-circle ${color.name} ${
                            currentColor === color.value ? 'selected' : ''
                        }`}
                        onClick={() => onSelectColor(color.value)} // only change color, don't close
                    ></div>
                ))}
            </div>
        </div>
    )
}
