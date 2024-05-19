
export default function PageHeading({title}) {
    return (
        <div>
            <h2 id="page-heading">{title}</h2>
            <section id="page-title">
                <img className="square-die" src="/SVG/Boost.svg"/>
                <img src="AoCaCWebsite/SVG/Ability.svg"/>
                <img src="/SVG/Proficiency.svg"/>
                <img src="/SVG/Challenge.svg"/>
                <img src="/SVG/Difficulty.svg"/>
                <img className="square-die" src="/SVG/Penalty.svg"/>
            </section>
        </div>
    );
}