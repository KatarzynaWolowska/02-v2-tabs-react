import { PropTypes } from 'prop-types'
import TabItem from './TabItem'

const TabItems = ({ data, tabIdActive, setTabIdActive }) => {
    return (
        <ul>
            {data.map(tab => (
                <li key={`tab-${tab.id}`}>
                    <TabItem
                        id={tab.id}
                        label={tab.label}
                        isActive={tab.id === tabIdActive ? true : false}
                        setTabIdActive={setTabIdActive}
                    />
                </li>
            ))}
        </ul>
    )
}

TabItems.propTypes = {
    data: PropTypes.array,
    tabIdActive: PropTypes.string,
    setTabIdActive: PropTypes.func
}

export default TabItems
