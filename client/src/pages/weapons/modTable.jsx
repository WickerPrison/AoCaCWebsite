import { useEffect, useState } from "react"

export default function ModTable({mods}){
    const allParts = ["Blade", "Boss", "Dart", "Frame", "Grip", "Head", "Point"];
    let [sortedMods, setSortedMods] = useState([]);
    
    useEffect(() => {
        let modsArray = [];
        for(let i = 0; i < allParts.length; i++){
            let partObject = {name: allParts[i], descriptions: []}
            for(let j = 0; j < mods.length; j++){
                if(mods[j].Parts.includes(allParts[i])){
                    partObject.descriptions.push(mods[j].Description);
                }
            }
            modsArray.push(partObject);
        }
        setSortedMods(modsArray);
    },[])
    
    return (
    <section id="modifications-table" className="table">
        <h3 className="table-header">Weapon Modifications</h3>
        <p className="mod-explanation">Adding a weapon attachment to a weapon costs 30 gold. A weapon can have one attachment for each customization part. Modifications on this table can be added to weapons with the Fabrication skill.</p>
        <div className="mod-header">
            <div>Customization Parts</div>
            <div>Customization Options</div>
        </div>
        {sortedMods.map((mod) => {
            return (
                <div key={mod.name} className="mod-part">
                    <div className="part-label">{mod.name}</div>
                    <div className="mod-descriptions">
                        {mod.descriptions.map((description, index) => {
                            return <div key={index} className="mod-desc">{description}</div>
                        })}
                    </div>
                </div>
            )
        })}

    </section>
    )
}