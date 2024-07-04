import './weapons.css';
import FixedHeader from '../../components/fixedHeader';
import PageHeading from '../../components/pageHeading';
import Table from '../../components/table';
import { useEffect, useState } from 'react';
import { multipleFetch } from '../../js/getData';
import ModTable from './modTable';
import Loading from '../../components/loading';

const headerEntries = [
    { link: "#brawl", label: "Brawl"},
    { link: "#lightWeapons", label: "Light Weapons"},
    { link: "#heavyWeapons", label: "Heavy Weapons"},
    { link: "#ranged", label: "Ranged"},
    {link: "#properties", label:"Properties"},
    {link: "#mods", label:"Modifications"},
    {link: "#masterwork", label:"Masterwork"}
];

const weaponData = {
    column1: ["Skill", "Damage", "Range", "Critical"],
    column2: ["Parts", "Encumbrance", "Material", "Price", "Rarity"],
    description: "Properties"
}

const propertiesData = {
    title:"Weapon Properties"
}

const masterworkData = {
    title: "Masterwork Weapons",
    column1: ["Parts"],
    explanation: "Masterwork weapons cost an additional 300 gold and gain one modification from this table. Each weapon can have 1 Masterwork Modification, but it must be of a type for which the weapon has a modification slot (as listed below). Importantly, Masterwork Modifications do not take the place of a regular weapon attachment. Masterwork modifications cannot be added to existing weapons, but must be added at the time of their creation. All masterwork weapons have a rarity 1 higher than a regular weapon of their type, with a minimum of 4."
}

export default function Weapons(){
    let [brawl, setBrawl] = useState([]);
    let [lightWeapons, setLightWeapons] = useState([]);
    let [heavyWeapons, setHeavyWeapons] = useState([]);
    let [ranged, setRanged] = useState([]);
    let [weaponMods, setWeaponMods] = useState([]);
    let [masterwork, setMasterwork] = useState([]);
    let [weaponProperties, setWeaponProperties] = useState([]);
    
    useEffect(() => {
        async function getData(){
            let data = await multipleFetch(["Weapons", "WeaponModifications", "WeaponProperties"]);
            setBrawl(data[0].filter(weapon => weapon.Skill == "Brawl"));
            setLightWeapons(data[0].filter(weapon => weapon.Skill == "Light Weapons"));
            setHeavyWeapons(data[0].filter(weapon => weapon.Skill == "Heavy Weapons"));
            setRanged(data[0].filter(weapon => weapon.Skill == "Ranged"));
            setWeaponMods(data[1].filter(mod => mod.Name == ""));
            setMasterwork(data[1].filter(mod => mod.Name !== ""));
            setWeaponProperties(data[2]);
        }
        getData();
    }, [])
    

    if(brawl.length <= 0){
        return(
            <main>
                <FixedHeader entries={headerEntries}/>
                <PageHeading title="Weapons"/>
                <Loading/>
            </main>
        )
    }
    else{
        return(
            <main>
                <FixedHeader entries={headerEntries}/>
                <PageHeading title="Weapons"/>
                <div id="brawl"></div>
                {brawl.length > 0 ? <Table title="Brawl" tableData={weaponData} contentData={brawl}/> : null}
                <div id="lightWeapons"></div>
                {lightWeapons.length > 0 ? <Table title="Light Weapons" tableData={weaponData} contentData={lightWeapons}/> : null}
                <div id="heavyWeapons"></div>
                {heavyWeapons.length > 0 ? <Table title="Heavy Weapons" tableData={weaponData} contentData={heavyWeapons}/> : null}
                <div id="ranged"></div>
                {ranged.length > 0 ? <Table id="ranged" title="Ranged" tableData={weaponData} contentData={ranged}/> : null}
                <div id="properties"></div>
                {weaponProperties.length > 0 ? <Table tableData={propertiesData} contentData={weaponProperties}/> : null}
                <div id="mods"></div>
                {weaponMods.length > 0 ? <ModTable mods={weaponMods}/> : null}
                <div id="masterwork"></div>
                {masterwork.length > 0 ? <Table tableData={masterworkData} contentData={masterwork}/> : null}
            </main>
        )
    }
}