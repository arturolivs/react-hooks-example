import React, { useState, useEffect } from 'react';

function App() {
    const [techs, setTech] = useState([])
    const [newTech, setNewTech] = useState('')

    function handleAdd() {
        setTech([...techs, newTech])
        setNewTech('')
    }

    useEffect(() => {
        const storageTechs = localStorage.getItem('techs')

        if (storageTechs)
            setTech(JSON.parse(storageTechs))
    }, [])

    useEffect(() => {
        localStorage.setItem('techs', JSON.stringify(techs))
    }, [techs])

    return (
        <>
            <ul>
                {techs.map(t => (<li key={t} > {t} </li>))}
            </ul>
            <input value={newTech} onChange={e => setNewTech(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add</button>
        </>
    )
}

export default App;
