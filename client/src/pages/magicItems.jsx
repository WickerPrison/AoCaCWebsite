import FixedHeader from "../components/headerComponents/fixedHeader";
import PageHeading from "../components/headerComponents/pageHeading";
import Table from "../components/table";
import { useEffect, useState } from 'react';
import Loading from "../components/loading";
import getUrl from "../utils/getUrl";
import {equipment} from "../data/equipment";
import { enchantingEffects } from "../data/enchantingEffects";

const wondrousItemsData = {
    title:"Wondrous Items",
    column1: ["Material", "Base Item"],
    column2: ["Price", "Rarity", "Encumbrance"]
}

const enchantingEffectsData = {
    title:"Enchanting Effects",
    column1: ["Rarity", "Slots"],
    explanation: "The following effects are intended to be applied to a variety of different items. The magic item slots for a character are: Head, Neck, Hands (2), Torso, and Feet. Magic Weapons are wielded as normal, and Other indicates that another item that is not worn (such as a set of tools) may be enchanted with that effect. In naming specific items, the convention of using the name of the base item, followed by an “of” and the effect name is suggested. For example, a pair of gloves enchanted with the Missile Snaring enchantment effect could be called “Gloves of Missile Snaring”."
}

export default function MagicItems(){
    let [wondrousItems, setWondrousItems] = useState(equipment.wondrous);
    let [enchantingEffectsList, setEnchantingEffectsList] = useState(enchantingEffects);

    // useEffect(() => {
    //     async function getData(){
    //         try{
    //             const response = await fetch(getUrl() + '/api/data/magicitems', {
    //                 method: 'GET',
    //                 headers: { 'Content-Type': 'application/json' }
    //             })
    
    //             const data = await response.json();
    //             setWondrousItems(data.wondrous);
    //             setEnchantingEffects(data.enchantments);
    //         }
    //         catch(err){
    //             console.log(err);
    //         }
    //     }
    //     getData();
    // }, [])

    return (
        <main>
            <FixedHeader/>
            <PageHeading title="Magic Items"/>
            {wondrousItems.length > 0 ? <Table tableData={wondrousItemsData} contentData={wondrousItems}/> : <Loading/>}
            {enchantingEffectsList.length > 0 ? <Table tableData={enchantingEffectsData} contentData={enchantingEffectsList}/> : null}
        </main>
    )
}