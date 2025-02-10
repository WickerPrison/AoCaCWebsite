import { useState} from 'react';
import GreyOut from '../../components/greyOut'

export default function TalentsSelector({options, currentOptions, setOptions, showMenu, setShowMenu}){
    const [allOptions, setAllOptions] = useState(options);
    const [displayOptions, setDisplayOptions] = useState(options);

    const getRanks = (option) => {
        let index = currentOptions.findIndex(talent => talent.Name == option.Name);
        if(index < 0) return 0;
        return currentOptions[index].ranks;
    }

    const updateTalents = (e, option) => {
        e.preventDefault();
        let temp = currentOptions.slice();
        let index = temp.findIndex(talent => talent.Name == option.Name);

        if(e.target.value == 0){
            if(index >= 0) temp.splice(index, 1);
        }
        else{
            if(index < 0){
                let optionClone = structuredClone(option);
                optionClone.ranks = e.target.value;
                temp.push(optionClone);
            }
            else{
                temp[index].ranks = e.target.value;
            }
        }
        setOptions(temp);
    }

    return(
        <div className="checklist">
            {showMenu ? <GreyOut/> : null}
            {showMenu ? 
                <div className="popup">
                    <div className='card box checklist-card'>
                        <div className='box-header'>Talents</div>
                        <div className='checklist-list'>
                            {displayOptions.map((option, index) => {
                                return(
                                    <div key={option.Name}>
                                        <div className='checklist-holder'>
                                            <div className="checklist-name">{option.Name}</div>
                                            <input type="number" value={getRanks(option)} onChange={e => updateTalents(e, option)} min="0" max={option.Stacks}></input>
                                            <div className='checklist-description'>{option.Description}</div>
                                        </div>
                                        {index < displayOptions.length - 1 ? <div className='line'></div> : null}
                                    </div>
                                )
                            })}
                        </div>
                        <button className="small-button button-margin" onClick={evt => {evt.preventDefault(); setShowMenu(false);}}>Done</button>
                    </div>
                </div>
            : null}
        </div>
    )
}