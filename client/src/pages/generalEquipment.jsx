import FixedHeader from "../components/headerComponents/fixedHeader";
import PageHeading from "../components/headerComponents/pageHeading";
import Table from "../components/table";
import { useEffect, useState } from 'react';
import Loading from "../components/loading";
import getUrl from "../utils/getUrl";
import {equipment} from "../data/equipment";

const tableData = {
    title:"General Equipment",
    column1: ["Material", "Encumbrance"],
    column2: ["Price", "Rarity"]
}

export default function GeneralEquipment(){
    let [equipmentList, setEquipmentList] = useState(equipment.general);

    // useEffect(() => {
    //     async function getData(){
    //         try{
    //             const response = await fetch(getUrl() + '/api/data/equipment', {
    //                 method: 'GET',
    //                 headers: { 'Content-Type': 'application/json' }
    //             })
    
    //             const data = await response.json();
    //             setEquipment(data);
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
            <PageHeading title="General Equipment"/>
            {equipmentList.length > 0 ? <Table tableData={tableData} contentData={equipmentList}/> : <Loading/>}
        </main>
    )
}