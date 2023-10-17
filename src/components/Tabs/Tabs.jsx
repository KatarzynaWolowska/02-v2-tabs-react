import { PropTypes } from 'prop-types'
import TabItems from './TabItems'
import TabContents from './TabContents'

import './styles/Tabs.css'

const Tabs = ({ data, tabIdActive, setTabIdActive }) => {
    return (
        <div className='tabs'>
            <TabItems data={data} tabIdActive={tabIdActive} setTabIdActive={setTabIdActive} />
            <TabContents data={data} tabIdActive={tabIdActive} />
        </div>
    )
}

Tabs.propTypes = {
    data: PropTypes.array,
    tabIdActive: PropTypes.string,
    setTabIdActive: PropTypes.func
}

export default Tabs
