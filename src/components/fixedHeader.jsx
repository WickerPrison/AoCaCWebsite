import {Link} from 'react-router-dom';

const styles={
    fixedHeader:{
        position: "fixed",
        top: 0
    }
}

const buttonChar = ">";

export default function FixedHeader(props){
    return(
        <header style={styles.fixedHeader}>
            {props.entries ? <button id="nav-hide">{buttonChar}</button>: null}
            <h1><Link id="HomeButton" to="/">Age of Conquest and Calamity</Link></h1>
            {props.entries ? (props.entries.map((result) => {
                return <a key={result.label} className="nav-bar hidden" href={result.link}>{result.label}</a>
            })): null}

            <div id="nav-spacer"></div>
        </header>
    )
}