import '../../components/table.css'
import './talentList.css'
import {useState, useEffect} from 'react';
import { singleFetch } from '../../js/getData';
import FixedHeader from '../../components/fixedHeader';
import PageHeading from '../../components/pageHeading';
import Loading from '../../components/loading';
import Filters, {FilterTypes} from '../../components/filters';

const filterArray =[
    {
        category: "XP Cost",
        type: FilterTypes.NUMBER_ARRAY,
        options: [5, 10, 15, 20, 25]
    }
]

export default function TalentList(){
    let [talentList, setTalentList] = useState([]);
    let [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        async function getData(){
            let data = await singleFetch("Talents");
            data = getCostString(data);
            setDisplayList(data);
            setTalentList(data);
        }
        getData();
    },[])

    function getCostString(data){
        for(let i = 0; i < data.length; i++){
            let costArray = [Number(data[i].XPmin)];
            if(data[i].XPmax){
                let currentValue = Number(data[i].XPmin);
                let foundValues = false;
                while(!foundValues){
                    currentValue += 5;
                    if(currentValue <= Number(data[i].XPmax)){
                        costArray.push(currentValue);
                    }
                    else{
                        foundValues = true;
                    }
                }
            }
            data[i]["XP Cost"] = costArray;
        }
        return data;
    }

    function getXPcost(talent){
        let output = talent.XPmin;
        if(talent.XPmax){
            output += "-" + talent.XPmax;
        }
        output += " XP";
        return output;
    }

    if(talentList.length <= 0){
        return(
            <main id="talent-list">
                <FixedHeader/>
                <PageHeading title="Talent List"/>
                <Loading/>
            </main>
        )
    }
    else{
        return(
            <main id="talent-list">
                <FixedHeader/>
                <PageHeading title="Talent List"/>
                <Filters filterArray={filterArray} input={talentList} setOutput={setDisplayList} title="Filter"/>
                <div className="table">
                    <div className="band"></div>
                    <div className="table-header talent-header">
                        <div className='header-element'>Talent Name</div>
                        <div className='header-element'>XP Cost</div>
                        <div className='header-element'>Stacks</div>
                        <div className='description-header header-element'>Description</div>
                    </div>
                    {displayList.map((talent, index) => {
                        return <div className='table-row' key={index}>
                                <div className="entry">{talent.Name}</div>
                                <div className='entry center-text'>{getXPcost(talent)}</div>
                                <div className='entry center-text'>{talent.Stacks}</div>
                                <div className="talent-description">{talent.Description}</div>
                                <div className="line"></div>
                            </div>
                    })}
                    
                </div>
            </main>
        )
    }
}