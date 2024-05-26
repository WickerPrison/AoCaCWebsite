export default function FilterOptions({data, index, filterOptions, setFilterOptions}){
    
    function isSelected(option){
        if(filterOptions[index].options.includes("All") || filterOptions[index].options.includes(option)){
            return "selected";
        }
        else return "";
    }

    function setToAll(){
        let tempArray = filterOptions.slice();
        tempArray[index].options = ["All"];
        setFilterOptions(tempArray);
    }

    function selectOption(option){
        let tempArray = filterOptions.slice();

        let optionIndex = tempArray[index].options.indexOf("All");
        if(optionIndex != -1){
            tempArray[index].options.splice(optionIndex, 1);
        }

        optionIndex = tempArray[index].options.indexOf(option);
        if(optionIndex != -1){
            tempArray[index].options.splice(optionIndex, 1);
        }
        else{
            tempArray[index].options.push(option);
        }
        setFilterOptions(tempArray);
    }
    
    return (
        <div className="options-holder">
            <div className="options-label">{data.category}:</div>
            <div onClick={setToAll} className={`option ${isSelected("All")}`}>All</div>
            {data.options.map((option) => {
                return <div onClick={() => selectOption(option)} className={`option ${isSelected(option)}`} key={option}>{option}</div>
            })}
        </div>
    )
}