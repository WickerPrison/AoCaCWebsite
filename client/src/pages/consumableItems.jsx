import FixedHeader from "../components/fixedHeader";
import PageHeading from "../components/pageHeading";
import Table from "../components/table";
import { useEffect, useState } from 'react';
import { singleFetch } from '../js/getData';
import Loading from "../components/loading";

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
    let [bombs, setBombs] = useState([]);
    let [medicalItems, setMedicalItems] = useState([]);
    let [potions, setPotions] = useState([]);
    let [misc, setMisc] = useState([]);

    useEffect(() => {
        async function getData(){
            let data = await singleFetch("Consumables");
            setBombs(data.filter(item => item.Category == "Bomb"));
            setMedicalItems(data.filter(item => item.Category == "Medicinal"));
            setPotions(data.filter(item => item.Category == "Potion"));
            setMisc(data.filter(item => item.Category == "Misc"));
        }
        getData();
    }, [])

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
                {bombs.length > 0 ? <Table tableData={bombsData} contentData={bombs}/> : null}
                {medicalItems.length > 0 ? <Table tableData={medicalItemsData} contentData={medicalItems}/> : null}
                {potions.length > 0 ? <Table tableData={potionsData} contentData={potions}/> : null}
                {misc.length > 0 ? <Table tableData={miscData} contentData={misc}/> : null}
            </main>
        )
    }
}