import './tooltipText.css'

export default function TooltipText({displayText, tooltipText}){
    return (
        <span className="tooltip-text" data-content={tooltipText}>{displayText}</span>
    )
}