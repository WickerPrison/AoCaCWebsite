import FilterOptions from './filterOptions';
import './filters.css';
import {useState, useEffect} from 'react';
import SortOptions from './sortOptions';

export default function Filters({filterArray, setOutput, input, sortArray, title="Filters and Sorting"}){
    const [sortOptions, setSortOptions] = useState(sortArray? {parameter: sortArray[0].parameter, direction: 1, type: sortArray[0].type} : null); 
    const [filterOptions, setFilterOptions] = useState(() => {
        let startState = [];
        for(let i = 0; i < filterArray.length; i++){
            startState.push({
                category: filterArray[i].category,
                options: ["All"],
            });
        }
        return startState;
    });
    
    useEffect(() =>{
        let tempArray = input.slice();
        tempArray = tempArray.filter((entry) => {
            for(let i = 0; i < filterOptions.length; i++){
                if(!filterOptions[i].options.includes("All") && !filterOptions[i].options.includes(entry[filterOptions[i].category])){
                    return false
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

    return(
        <section className="filters box">
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