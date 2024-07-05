import FixedHeader from "../components/headerComponents/fixedHeader";
import PageHeading from "../components/headerComponents/pageHeading";
import Table from "../components/table";
import { useEffect, useState } from 'react';
import { singleFetch } from '../js/getData';
import Loading from "../components/loading";

const tableData = {
    title:"General Equipment",
    column1: ["Material", "Encumbrance"],
    column2: ["Price", "Rarity"]
}

export default function GeneralEquipment(){
    let [equipment, setEquipment] = useState([]);

    useEffect(() => {
        async function getData(){
            let data = await singleFetch("GeneralEquipment");
            setEquipment(data);
        }
        getData();
    }, [])

    return (
        <main>
            <FixedHeader/>
            <PageHeading title="General Equipment"/>
            {equipment.length > 0 ? <Table tableData={tableData} contentData={equipment}/> : <Loading/>}
        </main>
    )
}