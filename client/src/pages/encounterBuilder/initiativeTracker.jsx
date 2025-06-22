import { useEffect, useState, useRef } from 'react';
import InitiativeEntry from './initiativeEntry';
import './initiativeTracker.css';

export default function InitiativeTracker({initEntries, setInitEntries, initData}){
    let [showInit, setShowInit] = useState(false);
    
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

    const sortEntries = evt => {
        evt.preventDefault();
        const temp = initEntries.slice();
        temp.sort((a, b) => {
            if(a.successes == b.successes){
                return b.advantage - a.advantage;
            }
            return b.successes - a.successes;
        })
        setInitEntries(temp);
    }

    const updateMethods = {
        updateEntry(entry){
            const updatedEntries = initEntries.map(oldEntry => {
                if(oldEntry.id == entry.id){
                    oldEntry = entry;
                }
                return oldEntry;
            })
            setInitEntries(updatedEntries);
        },
        removeEntry(id){
            const updatedEntries = initEntries.filter(entry => {
                return entry.id !== id;
            })
            setInitEntries(updatedEntries);
        },
        moveUp(id){
            const temp = initEntries.slice();
            const index = temp.findIndex(entry => entry.id == id);
            if(index == 0) return;
            const tempEntry = temp[index - 1];
            temp[index - 1] = temp[index];
            temp[index] = tempEntry;
            setInitEntries(temp);
        },
        moveDown(id){
            const temp = initEntries.slice();
            const index = temp.findIndex(entry => entry.id == id);
            if(index + 1 >= temp.length) return;
            const tempEntry = temp[index + 1];
            temp[index + 1] = temp[index];
            temp[index] = tempEntry;
            setInitEntries(temp);
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
                    <button className="small-button" onClick={e => sortEntries(e)}>Sort</button>
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