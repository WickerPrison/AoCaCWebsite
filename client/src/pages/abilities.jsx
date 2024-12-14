import FixedHeader from "../components/headerComponents/fixedHeader";
import PageHeading from "../components/headerComponents/pageHeading";
import Table from "../components/table";
import {abilities} from "../data/abilities"

const tableData = {
    title:"Abilities"
}

export default function Abilities(){

    return (
        <main>
            <FixedHeader/>
            <PageHeading title={"Abilities"}/>
            <Table tableData={tableData} contentData={abilities} options={{nameBasis: "20%"}}/>
        </main>
    )
}