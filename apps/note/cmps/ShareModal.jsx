export function ShareModal({ note, onClose }) {
    function handleShare(type, ev) {
        ev.stopPropagation() // prevent bubbling to parent

        switch (type) {
            case 'email':
                window.location.href = `mailto:?subject=${encodeURIComponent(
                    note.title || ''
                )}&body=${encodeURIComponent(note.txt || '')}`
                break

            case 'facebook':
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                    )}`,
                    '_blank'
                )
                break

            case 'download':
                const blob = new Blob([note.txt || ''], { type: 'text/plain' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `${note.title || 'note'}.txt`
                a.click()
                URL.revokeObjectURL(url)
                break

            default:
                break
        }

        onClose()
    }

    return (
        <div
            className="share-modal-overlay"
            onClick={(ev) => {
                ev.stopPropagation() // prevent bubbling to note card
                onClose()
            }}
        >
            <div
                className="share-modal"
                onClick={(ev) => ev.stopPropagation()} // clicks inside modal don’t close it
            >
                <h3>Share Note</h3>
                <div className="share-options">
                    <button onClick={(ev) => handleShare('email', ev)}>
                        📧 Email
                    </button>
                    <button onClick={(ev) => handleShare('facebook', ev)}>
                        <i className="fa-brands fa-square-facebook"></i>
                    </button>
                    <button onClick={(ev) => handleShare('download', ev)}>
                        ⬇️ Download
                    </button>
                </div>
                <button
                    className="btn-cancel"
                    onClick={(ev) => {
                        ev.stopPropagation()
                        onClose()
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
