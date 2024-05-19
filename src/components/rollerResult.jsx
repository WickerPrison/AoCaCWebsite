import './rollerResult.css';

export default function RollerResult({result, label}){
    return(
        <div className = "output-element">
            <h4>{label} </h4>
            <div className="dice-holder">
                <img src="./SVG/d12.svg"/>
                <h4 className="conquests">{result}</h4>
            </div>
        </div>
    )
}