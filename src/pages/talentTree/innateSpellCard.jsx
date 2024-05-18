export default function InnateSpellCard({spell}){
    return (
        <div className="spell-card">
            <h4 className="spell-name card-element">{spell.Name}</h4>
            <h4 className="card-element">Tier: {spell.Tier}</h4>
            <h4 className="card-element">Stamina: {spell.Stamina}</h4>
            <div className="card-line card-element"></div>
            <h4 className="card-element">{spell.Description}</h4>
        </div>
    )
}