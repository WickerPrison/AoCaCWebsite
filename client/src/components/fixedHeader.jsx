import './fixedHeader.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

let linkDisplay = "none";

const styles={
    fixedHeader:{
        position: "fixed",
        top: 0
    }
}

export default function FixedHeader(props){
    let [showLinks, setShowLinks] = useState(false);

    function toggleLinks(){
        if(linkDisplay == "none"){
            linkDisplay = "flex";
        }
        else{
            linkDisplay = "none";
        }
        setShowLinks(!showLinks);
    }

    return(
        <header id="fixed-header" style={styles.fixedHeader}>
            {props.entries ? <button id="nav-hide" onClick={toggleLinks}>{showLinks ? "v":">"}</button>: null}
            <h1><Link id="HomeButton" to="/">Age of Conquest and Calamity</Link></h1>
            {props.entries ? (props.entries.map((result) => {
                return <a key={result.label} className={`nav-bar ${showLinks ? "hide-links":""}`} href={result.link}>{result.label}</a>
            })): null}

            <div id="nav-spacer"></div>
        </header>
    )
}