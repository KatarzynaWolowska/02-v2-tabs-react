import { PropTypes } from 'prop-types'

const TabItem = ({ id, label, isActive, setTabIdActive }) => {
    return (
        <button
            type='button'
            role='tab'
            aria-selected={isActive}
            className={`tab ${isActive ? 'tab--active' : ''}`}
            onClick={() => {
                setTabIdActive(id)
            }}>
            {label}
        </button>
    )
}

TabItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    isActive: PropTypes.bool,
    setTabIdActive: PropTypes.func
}

export default TabItem
