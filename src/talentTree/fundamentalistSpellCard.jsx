export default function FundamentalistSpellCard({spell}){
    return (
        <div className="spell-card">
            <h4 className="spell-name card-element">{spell.Name}</h4>
            <h4 className="card-element">Tier: {spell.Tier}</h4>
            <h4 className="card-element">Stamina: {spell.Stamina}</h4>
            <h4 className="card-element">Polarization: +/- {spell.Polarization}</h4>
            <h4 className="spell-name card-element">Positive Version</h4>
            <h4 className="card-element">{spell.Positive}</h4>
            <h4 className="spell-name card-element">Negative Version</h4>
            <h4 className="card-element">{spell.Negative}</h4>
        </div>
    )
}