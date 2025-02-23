import { useEffect, useState, useRef } from 'react';
import './initiativeTracker.css';

export default function InitiativeEntry({entryData, updateMethods}){
    
    const updateEntry = (field, value) => {
        entryData[field] = value;
        updateMethods.updateEntry(entryData);
    }

    return (
        <div className="init-entry">
            <label>Name</label>
            <input type="text" value={entryData.name} onChange={e => updateEntry("name", e.target.value)}></input>
            <label>Team</label>
            <input type="text" value={entryData.team} onChange={e => updateEntry("team", e.target.value)}></input>
            <label>Successes</label>
            <input type="number" value={entryData.successes} onChange={e => updateEntry("successes", e.target.value)}></input>
            <label>Advantage</label>
            <input type="number" value={entryData.advantage} onChange={e => updateEntry("advantage", e.target.value)}></input>
            <label>Conquests</label>
            <input type="number" value={entryData.conquests} onChange={e => updateEntry("conquests", e.target.value)}></input>
        </div>
    )
}