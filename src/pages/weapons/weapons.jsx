import './weapons.css';
import FixedHeader from '../../components/fixedHeader';
import PageHeading from '../../components/pageHeading';
import Table from '../../components/table';
import { useEffect, useState } from 'react';
import { multipleFetch } from '../../js/getData';

const headerEntries = [
    { link: "#brawl", label: "Brawl"},
    { link: "#lightWeapons", label: "Light Weapons"},
    { link: "#heavyWeapons", label: "Heavy Weapons"},
    { link: "#ranged", label: "Ranged"}
];

const weaponData = {
    column1: ["Skill", "Damage", "Range", "Critical"],
    column2: ["Parts", "Encumbrance", "Material", "Price", "Rarity"],
    description: "Properties"
}

export default function Weapons(){
    let [brawl, setBrawl] = useState([]);
    let [lightWeapons, setLightWeapons] = useState([]);
    let [heavyWeapons, setHeavyWeapons] = useState([]);
    let [ranged, setRanged] = useState([]);
    let [weaponMods, setWeaponMods] = useState([]);
    let [weaponProperties, setWeaponProperties] = useState([]);
    
    useEffect(() => {
        async function getData(){
            let data = await multipleFetch(["Weapons", "WeaponModifications", "WeaponProperties"]);
            setBrawl(data[0].filter(weapon => weapon.Skill == "Brawl"));
            setLightWeapons(data[0].filter(weapon => weapon.Skill == "Light Weapons"));
            setHeavyWeapons(data[0].filter(weapon => weapon.Skill == "Heavy Weapons"));
            setRanged(data[0].filter(weapon => weapon.Skill == "Ranged"));
            setWeaponMods(data[1]);
            setWeaponProperties(data[2]);
        }
        getData();
    }, [])
    
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
        </main>
    )
}