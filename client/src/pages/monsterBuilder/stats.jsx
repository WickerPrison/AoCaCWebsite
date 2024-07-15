import './monsterBuilder.css';

export default function Stats({stats, setStats}){
    
    function updateStats(field, value){
        let temp = {...stats};
        temp[field] = value;
        setStats(temp);
    }
    
    return(
        <div className="grid-section stats-grid">
            <div>
                <label>HP: </label>
                <input type="number" value={stats.hp} onChange={e => updateStats("hp", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Stamina: </label>
                <input type="number" value={stats.stamina} onChange={e => updateStats("stamina", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>DR: </label>
                <input type="number" value={stats.dr} onChange={e => updateStats("dr", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Melee Def: </label>
                <input type="number" value={stats.meleeDef} onChange={e => updateStats("meleeDef", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Ranged Def: </label>
                <input type="number" value={stats.rangedDef} onChange={e => updateStats("rangedDef", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Move. Pts.: </label>
                <input type="number" value={stats.movePts} onChange={e => updateStats("movePts", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Agility: </label>
                <input type="number" value={stats.agility} onChange={e => updateStats("agility", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Brawn: </label>
                <input type="number" value={stats.brawn} onChange={e => updateStats("brawn", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Cunning: </label>
                <input type="number" value={stats.cunning} onChange={e => updateStats("cunning", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Intellect: </label>
                <input type="number" value={stats.intellect} onChange={e => updateStats("intellect", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Presence: </label>
                <input type="number" value={stats.presence} onChange={e => updateStats("presence", e.target.value)} min="0"></input>
            </div>
            <div>
                <label>Willpower: </label>
                <input type="number" value={stats.willpower} onChange={e => updateStats("willpower", e.target.value)} min="0"></input>
            </div>
        </div>
    )
}