import PageHeading from "../../components/headerComponents/pageHeading";
import StaticHeader from "../../components/headerComponents/staticHeader";
import CreateMonster from "./createMonster";
import { useEffect, useState, useRef } from 'react';
import './monsterBuilder.css';
import CreateAttack from "./createAttack";

const tabOptions={
    CREATE_MONSTER: "CREATE_MONSTER",
    CREATE_ATTACK: "CREATE_ATTACK",
    MY_MONSTERS: "MY_MONSTERS",
    MY_ATTACKS: "MY_ATTACKS "
}

export default function MonsterBuilder(){
    let [tab, setTab] = useState(tabOptions.CREATE_MONSTER);

    function changeTab(tabOption){
        setTab(tabOption);
    }

    function renderSwitch(tabOption){
        switch(tabOption){
            case tabOptions.CREATE_MONSTER:
                return <CreateMonster/>
            case tabOptions.CREATE_ATTACK:
                return <CreateAttack/>
            case tabOptions.MY_MONSTERS:
                return <div>my monsters</div>
            case tabOptions.MY_ATTACKS:
                return <div>my attacks</div>
        }
    }

    return (
        <main id='monster-builder'>
            <StaticHeader/>
            <PageHeading title="Monster Builder"></PageHeading>
            <section id="tabs">
                <button className={`small-button tab ${tab == tabOptions.CREATE_MONSTER ? "selected": ""}`} onClick={() => changeTab(tabOptions.CREATE_MONSTER)}>Create Monster</button>
                <button className={`small-button tab ${tab == tabOptions.CREATE_ATTACK ? "selected": ""}`} onClick={() => changeTab(tabOptions.CREATE_ATTACK)}>Create Attack</button>
                <button className={`small-button tab ${tab == tabOptions.MY_MONSTERS ? "selected": ""}`} onClick={() => changeTab(tabOptions.MY_MONSTERS)}>My Monsters</button>
                <button className={`small-button tab ${tab == tabOptions.MY_ATTACKS ? "selected": ""}`} onClick={() => changeTab(tabOptions.MY_ATTACKS)}>My Attacks</button>
            </section>
            {renderSwitch(tab)}
            <footer></footer>
        </main>
    )
}