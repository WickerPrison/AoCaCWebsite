import GreyOut from '../../components/greyOut';
import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import getUrl from '../../utils/getUrl';
import {spellEffects} from '../../data/scholarlySpellEffects';
import TooltipText from '../../components/tooltips/tooltipText';


export default function AddSpells({hasSpells, setHasSpells, spells, setSpells}){

    function toggleSpells(evt){
        evt.preventDefault(); 
        setHasSpells(!hasSpells);
    }

    function toggleSpellEffect(spell){
        let temp = spells.slice();
        if(temp.includes(spell.Name)){
            temp.splice(temp.indexOf(spell.Name), 1);
        }
        else{
            temp.push(spell.Name);
        }
        setSpells(temp);
    }

    if(!hasSpells){
        return (
            <div>
                <div className='spacer'></div>
                <label>Has Spells: </label>
                <button className={`checkbox ${hasSpells ? "show-check" : ""}`} onClick={evt => toggleSpells(evt)}>{"✔"}</button>
                <div className='spacer'></div>
            </div>
        )
    }
    else{
        return (
            <div>
                <div className='spacer'></div>
                <label>Has Spells: </label>
                <button className={`checkbox ${hasSpells ? "show-check" : ""}`} onClick={evt => toggleSpells(evt)}>{"✔"}</button>
                <div className='spacer'></div>

                <div className='spell-effect-grid'>
                    <div>
                        <div className='effects-header'>Metamagic</div>
                        {spellEffects.metamagic.map(spell => {
                            return <div key={spell.Name} className={`toggle ${spells.includes(spell.Name) ? "on" : ""}`}
                            onClick={() => toggleSpellEffect(spell)}
                            ><TooltipText displayText={spell.Name} tooltipText={[
                                `Duration: ${spell.Duration}`,
                                `Modifer: ${spell.Modifier}`,
                                `${spell.Description}`]}/></div>
                        })}
                    </div>
                    <div>
                        <div className='effects-header'>Initiate</div>
                        {spellEffects.initiate.map(spell => {
                            return <div key={spell.Name} className={`toggle ${spells.includes(spell.Name) ? "on" : ""}`}
                            onClick={() => toggleSpellEffect(spell)}
                            ><TooltipText displayText={spell.Name} tooltipText={[
                                `Duration: ${spell.Duration}`,
                                `Modifer: ${spell.Modifier}`,
                                `${spell.Description}`]}/></div>
                        })}
                    </div>
                    <div>
                        <div className='effects-header'>Adept</div>
                        {spellEffects.adept.map(spell => {
                            return <div key={spell.Name} className={`toggle ${spells.includes(spell.Name) ? "on" : ""}`}
                            onClick={() => toggleSpellEffect(spell)}
                            ><TooltipText displayText={spell.Name} tooltipText={[
                                `Duration: ${spell.Duration}`,
                                `Modifer: ${spell.Modifier}`,
                                `${spell.Description}`]}/></div>
                        })}
                    </div>
                    <div>
                        <div className='effects-header'>Magister</div>
                        {spellEffects.magister.map(spell => {
                            return <div key={spell.Name} className={`toggle ${spells.includes(spell.Name) ? "on" : ""}`}
                            onClick={() => toggleSpellEffect(spell)}
                            ><TooltipText displayText={spell.Name} tooltipText={[
                                `Duration: ${spell.Duration}`,
                                `Modifer: ${spell.Modifier}`,
                                `${spell.Description}`]}/></div>
                        })}
                    </div>
                    <div>
                        <div className='effects-header'>Arcanist</div>
                        {spellEffects.arcanist.map(spell => {
                            return <div key={spell.Name} className={`toggle ${spells.includes(spell.Name) ? "on" : ""}`}
                            onClick={() => toggleSpellEffect(spell)}
                            ><TooltipText displayText={spell.Name} tooltipText={[
                                `Duration: ${spell.Duration}`,
                                `Modifer: ${spell.Modifier}`,
                                `${spell.Description}`]}/></div>
                        })}
                    </div>
                </div>
                <div className='spacer'></div>
            </div>
        )
    }
}