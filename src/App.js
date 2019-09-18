import React, { useState } from 'react';

function App() {
    const [techs, setTech] = useState([])
    return (
        <ul>
            {techs.map(t => (<li key={t} > {t} </li>))}
        </ul>
    )
}

export default App;
