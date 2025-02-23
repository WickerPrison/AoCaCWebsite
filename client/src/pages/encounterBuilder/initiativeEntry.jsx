import { useEffect, useState, useRef } from 'react';
import './initiativeTracker.css';

export default function InitiativeEntry({entryData, updateMethods}){
    
    const updateEntry = (field, value) => {
        entryData[field] = value;
        updateMethods.updateEntry(entryData);
    }

    const removeEntry = evt => {
        evt.preventDefault();
        updateMethods.removeEntry(entryData.id);
    }

    const moveUp = evt => {
        evt.preventDefault();
        updateMethods.moveUp(entryData.id);
    }

    const moveDown = evt => {
        evt.preventDefault();
        updateMethods.moveDown(entryData.id);
    }

    return (
        <div className="init-entry">
            <button className='close-button' onClick={e => removeEntry(e)}>X</button>
            <label>Name </label>
            <input type="text" value={entryData.name} onChange={e => updateEntry("name", e.target.value)}></input>
            <label>Team </label>
            <input type="text" value={entryData.team} onChange={e => updateEntry("team", e.target.value)}></input>
            <button className="order-button" onClick={e => moveUp(e)}>^</button>
            <label>Suc. </label>
            <input type="number" value={entryData.successes} onChange={e => updateEntry("successes", e.target.value)}></input>
            <label>Adv. </label>
            <input type="number" value={entryData.advantage} onChange={e => updateEntry("advantage", e.target.value)}></input>
            <label>Conq. </label>
            <input type="number" value={entryData.conquests} onChange={e => updateEntry("conquests", e.target.value)}></input>
            <button className="order-button" onClick={e => moveDown(e)}>v</button>
        </div>
    )
}