import './tooltipText.css'
import {Link} from 'react-router-dom'

export default function TooltipText({displayText, tooltipText, link=null}){
    
    function getLink(){
        return <Link className="tooltip-link" to={link.link}>{link.text}</Link>
    }
    
    return (
        <span className="tooltip-text" data-content={tooltipText}>
            {displayText}
            <div className="tooltip">
                <div>{tooltipText}</div>
                <span>{link? getLink(): null}</span>
            </div>
        </span>
    )
}