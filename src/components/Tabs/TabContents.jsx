import { PropTypes } from 'prop-types'

const TabContents = ({ data, tabIdActive }) => {
    return (
        <>
            {data.map(tab => (
                <div
                    key={tab.id}
                    aria-labelledby={tab.id}
                    className={`tab__item__content ${tab.id === tabIdActive ? 'tab__item__content--active' : ''}`}
                    dangerouslySetInnerHTML={{ __html: tab.content }}></div>
            ))}
        </>
    )
}

TabContents.propTypes = {
    data: PropTypes.array,
    tabIdActive: PropTypes.string
}

export default TabContents
