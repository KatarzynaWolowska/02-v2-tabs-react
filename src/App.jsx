import { TABS } from './constants'
import { useState, useEffect } from 'react'
import Tabs from './components/Tabs/Tabs'

function App() {
    const [tabIdActive, setTabIdActive] = useState()

    useEffect(() => {
        setTabIdActive(TABS[0].id)
    }, [])

    return (
        <main>
            <Tabs data={TABS} tabIdActive={tabIdActive} setTabIdActive={setTabIdActive} />
        </main>
    )
}

export default App
