import { useState} from 'react';
import GreyOut from '../greyOut';
import Filters from '../filters';
import ChecklistDisplay from './checklistDisplay';

export default function Checklist({options, currentOptions, setOptions, showMenu, setShowMenu, title, filterArray = [], sortOptions = []}){
    const [allOptions, setAllOptions] = useState(options);
    const [displayOptions, setDisplayOptions] = useState(options);

    return(
        <div className="checklist">
            {showMenu ? <GreyOut/> : null}
            {showMenu ? 
                <div className="popup">
                    {filterArray.length > 0 ? 
                        <Filters
                            input = {allOptions}
                            setOutput = {setDisplayOptions}
                            filterArray={filterArray}
                            sortArray={sortOptions}
                        />
                    : null}
                    <div className='card box checklist-card'>
                        <div className='box-header'>{title}</div>
                        <div className='checklist-list'>
                            {displayOptions.map((option, index) => {
                                return(
                                    <div key={option.Name}>
                                        <ChecklistDisplay option={option} currentOptions={currentOptions} setOptions={setOptions}/>
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