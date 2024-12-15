import FixedHeader from "../components/headerComponents/fixedHeader";
import PageHeading from "../components/headerComponents/pageHeading";
import Table from "../components/table/table";
import {races} from "../data/races"

const tableData = {
    title:"Races",
    column1: ["Agility", "Brawn", "Cunning"],
    column2: ["Intellect", "Presence", "Wilpower"],
    description: "Abilities"
}

export default function Races(){

    return (
        <main>
            <FixedHeader/>
            <PageHeading title={"Races"}/>
            <Table tableData={tableData} contentData={races} options={{column2Basis: "12%"}}/>
        </main>
    )
}