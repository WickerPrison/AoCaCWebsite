import FilterOptions from './filterOptions';
import './filters.css';
import {useState, useEffect} from 'react';
import SortOptions from './sortOptions';

export const FilterTypes = {
    NUMBER_ARRAY: "NUMBER_ARRAY",
    STRING: "STRING",
    BOOL: "BOOL",
    MULTIINPUT: "MULTIINPUT"
}

export default function Filters({filterArray, setOutput, input, sortArray, title="Filters and Sorting"}){
    const [sortOptions, setSortOptions] = useState(sortArray? {parameter: sortArray[0].parameter, direction: 1, type: sortArray[0].type} : null); 
    const [filterOptions, setFilterOptions] = useState(() => {
        let startState = [];
        for(let i = 0; i < filterArray.length; i++){
            startState.push({
                category: filterArray[i].category,
                type: filterArray[i].type,
                options: ["All"],
            });
        }
        return startState;
    });
    
    useEffect(() =>{
        let tempArray = inputArrayHandler();
        tempArray = tempArray.filter((entry) => {
            for(let i = 0; i < filterOptions.length; i++){
                switch(filterOptions[i].type){
                    case FilterTypes.NUMBER_ARRAY:
                        if(filterByNumberArray(entry, i) == false) return false;
                        break;
                    case FilterTypes.BOOL:
                        if(filterByBool(entry, i) == false) return false;
                        break;
                    case FilterTypes.MULTIINPUT: break; 
                    case FilterTypes.STRING:
                    default:
                        if(filterByString(entry, i) == false) return false;
                        break;
                }
            }
            return true;
        })
        
        if(sortOptions){
            tempArray.sort((A, B) => {
                switch(sortOptions.type){
                    case String:
                        let a = A[sortOptions.parameter].toLowerCase();
                        let b = B[sortOptions.parameter].toLowerCase();
                        return sortOptions.direction * a.localeCompare(b);
                    case Number:
                        return sortOptions.direction * (A[sortOptions.parameter] - B[sortOptions.parameter]);
                }
            })
        }

        setOutput(tempArray);
    }, [filterOptions, sortOptions])

    function inputArrayHandler(){
        let tempArray = [];
        if(filterArray[0].type == FilterTypes.MULTIINPUT){
            if(filterOptions[0].options.includes("All")){
                for(let i = 0; i < filterArray[0].options.length; i++){
                    tempArray = tempArray.concat(input[filterArray[0].options[i]]);
                }
            }
            else{
                for(let i = 0; i < filterOptions[0].options.length; i++){
                    tempArray = tempArray.concat(input[filterOptions[0].options[i]]);
                }
            }
        }
        else{
            tempArray = input.slice();
        }
        return tempArray;
    }

    function filterByString(entry, i){
        let containsOption = false;
        for(let j = 0; j < filterOptions[i].options.length; j++){
            if(entry[filterOptions[i].category].includes(filterOptions[i].options[j])){
                containsOption = true;
            }
        }

        if(!filterOptions[i].options.includes("All") && !containsOption){
            return false
        }
    }

    function filterByNumberArray(entry, i){
        let intersection = filterOptions[i].options.filter(num => entry["XP Cost"].includes(num));

        if(!filterOptions[i].options.includes("All") && intersection.length == 0){
            return false
        }
    }

    function filterByBool(entry, i){
        if(filterOptions[i].options.includes("All")) {
            return;
        }
        else if(filterOptions[i].options.includes(filterArray[i].options[0]) && entry[filterOptions[i].category] == true){
            return;
        }
        else if(filterOptions[i].options.includes(filterArray[i].options[1]) && entry[filterOptions[i].category] == false){
            return;
        }
        else{
            return false;
        }

    }

    return(
        <section className="filters box card">
            <div className="box-header">{title}</div>
            {filterArray.map((entry, index) => {
                return (
                    <FilterOptions key={index} data={entry} index={index} filterOptions={filterOptions} setFilterOptions={setFilterOptions}/>
                )
            })}
            {sortOptions
            ?<SortOptions sortArray={sortArray} sortOptions={sortOptions} setSort={setSortOptions}/>
            :null}
        </section>
    )
}