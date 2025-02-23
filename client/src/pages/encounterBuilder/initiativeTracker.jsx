import { useEffect, useState, useRef } from 'react';
import InitiativeEntry from './initiativeEntry';
import './initiativeTracker.css';

function initData(){
    this.name = "";
    this.team = "";
    this.successes = 0;
    this.advantage = 0;
    this.conquests = 0;
    this.id = crypto.randomUUID();
}

export default function InitiativeTracker(){
    let [showInit, setShowInit] = useState(false);
    let [initEntries, setInitEntries] = useState([]);
    
    const toggleShowInit = evt => {
        evt.preventDefault();
        setShowInit(!showInit)
    }

    const addEntry = evt => {
        evt.preventDefault();
        let temp = initEntries.slice();
        temp.push(new initData);
        setInitEntries(temp);
    }

    const clearEntries = evt => {
        evt.preventDefault();
        setInitEntries([]);
    }

    const updateMethods = {
        updateEntry(entry){
            const updatedEntries = initEntries.map(oldEntry => {
                if(oldEntry.id == entry.id){
                    oldEntry = entry;
                }
                return oldEntry;
            })
            console.log(updatedEntries);
            setInitEntries(updatedEntries);
        }
    }

    if(showInit){
        return (
            <div className="init-tracker">
                <button className="init-header" onClick={e => toggleShowInit(e)}>Initiative Tracker</button>
                <div className="init-entries-holder">
                    {initEntries.map((entry, index) => {
                        return <InitiativeEntry key={index} entryData={entry} updateMethods={updateMethods}></InitiativeEntry>
                    }
                    )}
                </div>
                <div>
                    <button className="small-button" onClick={e => addEntry(e)}>Add</button>
                    <button className="small-button">Sort</button>
                    <button className="small-button" onClick={e => clearEntries(e)}>Clear</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <button className="show-init-tracker" onClick={e => toggleShowInit(e)}>
                {"I"}
            </button>
        )
    }
}