export default function SortOptions({sortArray, sortOptions, setSort}){
    
    function updateParameter(newValue){
        let temp = {...sortOptions};
        temp.parameter = newValue;
        let type = sortArray.find((element) => {
            return element.parameter == newValue;
        }).type;
        temp.type = type;
        setSort(temp);
    }

    function updateDirection(direction){
        let temp = {...sortOptions};
        temp.direction = direction;
        setSort(temp);
    }

    return(
        <div className="sort-options">
            <label className="options-label">Sort By: </label>
            <select value={sortOptions.parameter} onChange={e => updateParameter(e.target.value)}>
                {sortArray.map((option) => {
                    return <option key={option.parameter} value={option.parameter}>{option.displayName != null ? option.displayName : option.parameter}</option>
                })}
            </select>

            <select value={sortOptions.direction} onChange = {e => updateDirection(e.target.value)}>
                <option value={1}>Ascending</option>
                <option value={-1}>Descending</option>
            </select>
        </div>
    )
}