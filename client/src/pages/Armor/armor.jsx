import FixedHeader from '../../components/headerComponents/fixedHeader';
import PageHeading from '../../components/headerComponents/pageHeading';
import Table from '../../components/table';
import {armor} from '../../data/armor';


const armorData = {
    column1: ["Encumbrance", "Material", "Price", "Rarity"],
    column2: ["DamageReduction", "MeleeDefense", "RangedDefense"],
    description: "Properties"
}

export default function Armor(){


    return(
        <main>
            <FixedHeader/>
            <PageHeading title="Armor"/>
            <Table title = "Light Armors" tableData={armorData} contentData={armor.light} options={{column2Basis: "17%"}}/>
            <Table title = "Medium Armors" tableData={armorData} contentData={armor.medium} options={{column2Basis: "17%"}}/>
            <Table title = "Heavy Armors" tableData={armorData} contentData={armor.heavy} options={{column2Basis: "17%"}}/>
        </main>
    )
}