import './checklist.css'

export default function ChecklistDisplay({option, currentOptions, setOptions}){
    
    const isAdded = () => {
        return currentOptions.findIndex(x => x.Name == option.Name) >= 0;
    }

    const toggleOption = (evt) => {
        evt.preventDefault();
        let index = currentOptions.findIndex(x => x.Name == option.Name);
        let temp = currentOptions.slice();
        if(index >= 0){
            temp.splice(index, 1);
        }
        else{
            temp.push(option);
        }
        setOptions(temp);
    }
    
    return (
        <div className='checklist-holder'>
            <button className={`checkbox ${isAdded() ? "show-check" : ""}`} onClick={evt => toggleOption(evt)}>{"✔"}</button>
            <div className="checklist-name">{option.Name}</div>
            <div className='checklist-description'>{option.Description}</div>
        </div>
    )
}