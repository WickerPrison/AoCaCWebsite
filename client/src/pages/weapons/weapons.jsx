import './weapons.css';
import FixedHeader from '../../components/headerComponents/fixedHeader';
import PageHeading from '../../components/headerComponents/pageHeading';
import Table from '../../components/table/table';
import { useEffect, useState } from 'react';
import ModTable from './modTable';
import Loading from '../../components/loading';
import getUrl from '../../utils/getUrl';
import {weapons} from '../../data/weapons';
import {weaponMods} from '../../data/weaponMods';
import {weaponProperties} from '../../data/weaponProperties';

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

    if(weapons.brawl.length <= 0){
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
            <main id="weapons">
                <FixedHeader entries={headerEntries}/>
                <PageHeading title="Weapons"/>
                <div id="brawl"></div>
                {weapons.brawl.length > 0 ? <Table title="Brawl" tableData={weaponData} contentData={weapons.brawl}/> : null}
                <div id="lightWeapons"></div>
                {weapons.light.length > 0 ? <Table title="Light Weapons" tableData={weaponData} contentData={weapons.light}/> : null}
                <div id="heavyWeapons"></div>
                {weapons.heavy.length > 0 ? <Table title="Heavy Weapons" tableData={weaponData} contentData={weapons.heavy}/> : null}
                <div id="ranged"></div>
                {weapons.ranged.length > 0 ? <Table id="ranged" title="Ranged" tableData={weaponData} contentData={weapons.ranged}/> : null}
                <div id="properties"></div>
                {weaponProperties.length > 0 ? <Table tableData={propertiesData} contentData={weaponProperties}/> : null}
                <div id="mods"></div>
                {weaponMods.regular.length > 0 ? <ModTable mods={weaponMods.regular}/> : null}
                <div id="masterwork"></div>
                {weaponMods.masterwork.length > 0 ? <Table tableData={masterworkData} contentData={weaponMods.masterwork}/> : null}
            </main>
        )
    }
}