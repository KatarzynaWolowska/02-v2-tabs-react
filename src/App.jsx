import { useState } from 'react'
import './App.css'

function App() {
    const [tabActive] = useState(0)

    return (
        <>
            <p>{tabActive}</p>
        </>
    )
}

export default App
