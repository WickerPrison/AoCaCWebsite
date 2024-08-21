import './monsterBuilder.css';

const CreatureTypes={
    ABOMINATION: "Abomination",
    ANIMAL: "Animal",
    CONSTRUCT: "Construct",
    EXTRAPLANAR: "Extraplanar",
    HUMANOID: "Humanoid",
    LYCANTHROPE: "Lycanthrope",
    MYTHIC: 'Mythic',
    UNDEAD: "Undead"
}

export default function CreatureTypeSelector({creatureTypes, setCreatureTypes}){

    function toggleCreatureType(type){
        let temp = creatureTypes.slice();
        if(temp.includes(type)){
            if(temp.length == 1){
                return;
            }
            temp.splice(temp.indexOf(type), 1);
        }
        else{
            temp.push(type);
        }
        setCreatureTypes(temp);
    }

    return(
        <div className="grid-section stats-grid">
            <label className='full-width-label'>Creature Types:</label>
            <div className="flex-grid-entries">
                <div className={`toggle ${creatureTypes.includes(CreatureTypes.ABOMINATION) ? "on": ""}`} 
                    onClick={() => toggleCreatureType(CreatureTypes.ABOMINATION)}
                    >Abomination</div>
                <div className={`toggle ${creatureTypes.includes(CreatureTypes.ANIMAL) ? "on": ""}`} 
                    onClick={() => toggleCreatureType(CreatureTypes.ANIMAL)}
                    >Animal</div>
                <div className={`toggle ${creatureTypes.includes(CreatureTypes.CONSTRUCT) ? "on": ""}`} 
                    onClick={() => toggleCreatureType(CreatureTypes.CONSTRUCT)}
                    >Construct</div>
                <div className={`toggle ${creatureTypes.includes(CreatureTypes.EXTRAPLANAR) ? "on": ""}`} 
                    onClick={() => toggleCreatureType(CreatureTypes.EXTRAPLANAR)}
                    >Extraplanar</div>
                <div className={`toggle ${creatureTypes.includes(CreatureTypes.HUMANOID) ? "on": ""}`} 
                    onClick={() => toggleCreatureType(CreatureTypes.HUMANOID)}
                    >Humanoid</div>
                <div className={`toggle ${creatureTypes.includes(CreatureTypes.LYCANTHROPE) ? "on": ""}`} 
                    onClick={() => toggleCreatureType(CreatureTypes.LYCANTHROPE)}
                    >Lycanthrope</div>
                <div className={`toggle ${creatureTypes.includes(CreatureTypes.MYTHIC) ? "on": ""}`} 
                    onClick={() => toggleCreatureType(CreatureTypes.MYTHIC)}
                    >Mythic</div>
                <div className={`toggle ${creatureTypes.includes(CreatureTypes.UNDEAD) ? "on": ""}`} 
                    onClick={() => toggleCreatureType(CreatureTypes.UNDEAD)}
                    >Undead</div>

            </div>
        </div>
    )
}