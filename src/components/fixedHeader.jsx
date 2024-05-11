import {Link} from 'react-router-dom';

const buttonChar = ">";

export default function FixedHeader(props){
    return(
        <header>
            <button id="nav-hide">{buttonChar}</button>
            <h1><Link id="HomeButton" to="/">Age of Conquest and Calamity</Link></h1>
            {props.entries.map((result) => {
                return <Link key={result.label} className="nav-bar hidden" to={result.link}>{result.label}</Link>
            })}
            <div id="nav-spacer"></div>
        </header>
    )
}