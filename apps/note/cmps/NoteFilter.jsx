import { debounce } from '../../../services/util.service.js'
const { useState, useEffect, useRef } = React

export function NoteFilter({ defaultFilter, onSetFilter }) {
    const [filterByToEdit, setFilterToEdit] = useState({ ...defaultFilter })

    const onSetFilterDebounce = useRef(debounce(onSetFilter, 400)).current

    useEffect(() => {
        onSetFilterDebounce(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        setFilterToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    const { txt } = filterByToEdit

    return (
        <section className="note-filter">
            <form>
                <input
                    onChange={handleChange}
                    value={txt || ''}
                    name="txt"
                    id="txt"
                    type="text"
                    placeholder="Search notes..."
                />
            </form>
        </section>
    )
}
