import './criticalInjuries.css';
import FixedHeader from "../../components/headerComponents/fixedHeader";
import PageHeading from "../../components/headerComponents/pageHeading";
import Loading from "../../components/loading";
import {useState, useEffect} from 'react';
import getUrl from '../../utils/getUrl';
import {criticalInjuries} from '../../data/criticalInjuries';

export default function CriticalInjuries(){
    let [injuries, setInjuries] = useState([]);
    let [result, setResult] = useState(0);
    let [vicious, setVicious] = useState(0);
    let [rolledCrit, setRolledCrit] = useState({
        Name: "Minor Nick",
        Severity: "3",
        Effect: "The target takes 1 damage (ignoring Damage Reduction)."
    })

    useEffect(() => {
        // async function getData(){
        //     try{
        //         const response = await fetch(getUrl() + '/api/data/crits', {
        //             method: 'GET',
        //             headers: { 'Content-Type': 'application/json' }
        //         })
    
        //         const data = await response.json();
        //         for(let i = 0; i < data.length; i++){
        //             let string = "";
        //             if(data[i].d100min == -1){
        //                 string += 1;
        //             }
        //             else string += data[i].d100min;
                    
        //             if(data[i].d100max == -1){
        //                 string += "+";
        //             }
        //             else{
        //                 string += "-" + data[i].d100max;
        //             }
    
        //             data[i].d100 = string;
        //         }
        //         setInjuries(data);
        //     }
        //     catch(err){
        //         console.log(err);
        //     }
        // }
        // getData();

        const data = criticalInjuries;
        for(let i = 0; i < data.length; i++){
            let string = "";
            if(data[i].d100min == -1){
                string += 1;
            }
            else string += data[i].d100min;
            
            if(data[i].d100max == -1){
                string += "+";
            }
            else{
                string += "-" + data[i].d100max;
            }

            data[i].d100 = string;
        }
        setInjuries(data);
    },[])

    function rollCrit(){
        const randInt = Math.floor(Math.random() * 100) + 1;
        setResult(randInt);
        setRolledCrit(getCrit(Number(vicious) + Number(randInt))) 
    }

    function updateVicious(newValue){
        setVicious(newValue);
        setRolledCrit(getCrit(Number(newValue) + Number(result)));
    }

    function getCrit(value){
        if(value < 1){
            return injuries[0];
        }

        let crit = injuries.find((injury) => {
            return value <= Number(injury.d100max);
        })

        if(crit){
            return crit;
        }
        else{
            return injuries[injuries.length - 1]
        }
    }

    function getColor(severity){
        switch(severity){
            case 3:
                return 'var(--yellow)';
            case 4:
                return 'orange';
            case 5: 
                return 'red';
            case 6:
                return 'var(--red2)';
            case null:
                return 'var(--red)';
            default:
                return 'var(--yellow)';
        }
    }

    if(injuries.length <= 0){
        return (
            <main>
                <FixedHeader/>
                <PageHeading title="Critical Injuries"/>
                <Loading/>
            </main>
        )
    }
    else{
        return (
            <main id="crit">
                <FixedHeader/>
                <PageHeading title="Critical Injuries"/>

                <div className="crit-holder">
                    <div className="roll-info box">
                        <div className="box-header">Roll Crit</div>
                        <div className="left-column">Result: </div>
                        <div className="right-column"> {result}</div>
                        <label className="left-column">Modifier: </label>
                        <input className="right-column" type="number" step="10" value={vicious} onChange={e => updateVicious(e.target.value)}/>
                        <div className="left-column">Total:</div>
                        <div className="right-column"> {Number(result) + Number(vicious)}</div>
                        <button className="small-button" onClick={rollCrit}>Roll</button>
                    </div>

                    <div className="crit-info box">
                        <div className="box-header">{rolledCrit.Name}</div>
                        <div id="rolled-severity">
                            Severity: 
                            <div style={{backgroundColor: getColor(rolledCrit.Severity)}}  className='severity center-text'>
                                <div className="severity-number">{rolledCrit.Severity == null ? "-" : rolledCrit.Severity}</div>
                            </div>
                        </div>
                        <div className="rolled-effect">{rolledCrit.Effect}</div>
                    </div>
                </div>


                <div className="table">
                    <div className="band"></div>
                    <div className="table-header talent-header">
                        <div className='header-element'>d100</div>
                        <div className='header-element'>Name</div>
                        <div className='header-element'>Severity</div>
                        <div className='description-header header-element'>Effects</div>
                    </div>
                    {injuries.map((injury, index) => {
                        return <div className='table-row' key={index}>
                                <div className="entry">{injury.d100}</div>
                                <div className='entry'>{injury.Name}</div>
                                <div style={{backgroundColor: getColor(injury.Severity)}} className='severity entry center-text'>
                                    <div className="severity-number">{injury.Severity == null ? "-" : injury.Severity}</div>
                                </div>
                                <div className="crit-effect">{injury.Effect}</div>
                                {index + 1 < injuries.length? <div className="line"></div> :null} 
                            </div>
                    })}
                </div>
            </main>
        )
    }
}