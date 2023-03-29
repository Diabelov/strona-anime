import React, { useState } from 'react';
import Odtwarzacz from '../odtwarzacz';

function Aot1() {
    const [selectedSeason, setSelectedSeason] = useState('aot1');

    function handleSelectChange(event) {
        setSelectedSeason(event.target.value);
    }

    return (
        <div>
            <select className="season-select" value={selectedSeason} onChange={handleSelectChange}>
                <option value="aot1">Attack on Titan sezon 1</option>
                <option value="aot2">Attack on Titan sezon 2</option>
                <option value="aot3">Attack on Titan sezon 3</option>
                <option value="aot4">Attack on Titan sezon 4</option>
            </select>
            <div>
                <Odtwarzacz page={selectedSeason}/>
            </div>
        </div>
    );
}

export default Aot1;
