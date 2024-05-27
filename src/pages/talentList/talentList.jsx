import '../../components/table.css'
import './talentList.css'
import {useState, useEffect} from 'react';
import { singleFetch } from '../../js/getData';
import FixedHeader from '../../components/fixedHeader';
import PageHeading from '../../components/pageHeading';
import Loading from '../../components/loading';

export default function TalentList(){
    let [talentList, setTalentList] = useState([]);
    let [displayList, setDisplayList] = useState([]);

    useEffect(() => {
        async function getData(){
            let data = await singleFetch("Talents");
            setDisplayList(data);
            setTalentList(data);
        }
        getData();
    },[])

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
                <div className="table">
                    <div className="band"></div>
                    <div className="table-header talent-header">
                        <div className='header-element'>Talent Name</div>
                        <div className='header-element'>XP Cost</div>
                        <div className='header-element'>Stacks</div>
                        <div className='header-element'>Description</div>
                    </div>
                    {displayList.map((talent, index) => {
                        return <div className='table-row' key={index}>
                                <div>{talent.Name}</div>
                                <div className='center-text'>{getXPcost(talent)}</div>
                                <div className='center-text'>{talent.Stacks}</div>
                                <div>{talent.Description}</div>
                            </div>
                    })}
                    
                </div>
            </main>
        )
    }
}