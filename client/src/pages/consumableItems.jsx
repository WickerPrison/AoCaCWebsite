import FixedHeader from "../components/headerComponents/fixedHeader";
import PageHeading from "../components/headerComponents/pageHeading";
import Table from "../components/table/table";
import { useEffect, useState } from 'react';
import getUrl from "../utils/getUrl";
import Loading from "../components/loading";
import {equipment} from "../data/equipment";

const bombsData = {
    title:"Bombs",
    column1: ["Material", "Encumbrance"],
    column2: ["Price", "Rarity"]
}

const medicalItemsData = {
    title:"Medical Items",
    column1: ["Material", "Encumbrance"],
    column2: ["Price", "Rarity"]
}

const potionsData = {
    title:"Potions",
    column1: ["Material", "Encumbrance"],
    column2: ["Price", "Rarity"]
}

const miscData = {
    title:"Miscellaneous Consumables",
    column1: ["Material", "Encumbrance"],
    column2: ["Price", "Rarity"]
}

export default function ConsumableItems(){
    let [bombs, setBombs] = useState(equipment.bomb);
    let [medicalItems, setMedicalItems] = useState(equipment.medicinal);
    let [potions, setPotions] = useState(equipment.potion);
    let [misc, setMisc] = useState(equipment.misc);

    // useEffect(() => {
    //     async function getData(){
    //         try{
    //             const response = await fetch(getUrl() + '/api/data/consumeables', {
    //                 method: 'GET',
    //                 headers: { 'Content-Type': 'application/json' }
    //             })
    
    //             const data = await response.json();
    //             setBombs(data.bombs);
    //             setMedicalItems(data.medicinal);
    //             setPotions(data.potion);
    //             setMisc(data.misc);
    //         }
    //         catch(err){
    //             console.log(err);
    //         }
    //     }
    //     getData();
    // }, [])

    if(bombs.length <= 0){
        return(
            <main>
                <FixedHeader/>
                <PageHeading title="Consumable Items"/>
                <Loading/>
            </main>
        )
    }
    else{
        return (
            <main>
                <FixedHeader/>
                <PageHeading title="Consumable Items"/>
                {bombs.length > 0 ? <Table tableData={bombsData} contentData={bombs} options={{column2Basis: "12%"}}/> : null}
                {medicalItems.length > 0 ? <Table tableData={medicalItemsData} contentData={medicalItems} options={{column2Basis: "12%"}}/> : null}
                {potions.length > 0 ? <Table tableData={potionsData} contentData={potions} options={{column2Basis: "12%"}}/> : null}
                {misc.length > 0 ? <Table tableData={miscData} contentData={misc} options={{column2Basis: "12%"}}/> : null}
            </main>
        )
    }
}