import ClassList from './classList';
import HomePageSection from './homePageSection';
import PageHeading from '../../components/headerComponents/pageHeading';
import './home.css';
import SignInButton from '../../components/headerComponents/signInButton';
import StaticHeader from '../../components/headerComponents/staticHeader';

const resources = [
    {
        link: "DiceRoller",
        label: "Dice Roller"
    },
    {
        link: "MonsterManual",
        label: "Monster Manual"
    },
    {
        link: "EncounterBuilder",
        label: "Encounter Builder"
    },
    {
        link:"TalentList",
        label: "Talent List"
    },
    {
        link:"CriticalInjuries",
        label:"Critical Injuries"
    },
    {
        link:"MonsterBuilder",
        label:"Monster Builder",
        loggedIn: true
    }
];

const characterCreation = [
    {
        link: "Races",
        label: "Races"
    }
];

const classes = [
    {
        fieldName: "Combat",
        classes: [
            "Archer",
            "Assassin",
            "Barbarian",
            "Duelist",
            "Soldier"
        ]
    },
    {
        fieldName: "Utility",
        classes:[
            "Beastmaster",
            "Field Medic",
            "Inquisitor",
            "Monster Hunter",
            "Ranger"
        ]
    },
    {
        fieldName: "Innate",
        classes:[
            "Channeler",
            "Druid",
            "Sage",
            "Shapeshifter",
            "Fundamentalist"
        ]
    },
    {
        fieldName: "Scholarly",
        classes:[
            "Bard",
            "Battlemage",
            "Necromancer",
            "Researcher",
            "Wizard"
        ]
    },
    {
        fieldName: "Speech",
        classes:[
            "Charlatan",
            "Commander",
            "Drunken Master",
            "Merchant",
            "Performer"
        ]
    }
];

const equipment = [
    {
        link: "GeneralEquipment",
        label: "General"
    },
    {
        link: "ConsumableItems",
        label: "Consumables"
    },
    {
        link: "Weapons",
        label: "Weapons"
    },
    {
        link: "Armor",
        label: "Armor"
    },
    {
        link: "MagicItems",
        label: "Magic Items"
    }
];

const scholarly = [
    {
        link: "SpellEffects",
        label: "Spell Effects"
    },
    {
        link: "SpellBuilder",
        label: "Spell Builder"
    }
];

export default function Home() {
    return (
        <main id="home">
            <header>
                <h1>Age of Conquest and Calamity</h1>
                <SignInButton></SignInButton>
            </header>
            <PageHeading title="Age of Conquest and Calamity"/>
            <h3 className="heading-band">Resources</h3>
            <HomePageSection data={resources}/>
            <h3 className="heading-band">Character Creation</h3>
            <HomePageSection data={characterCreation}/>
            <h3 className="heading-band">Classes</h3>
            <section id="home-page-section">
                {classes.map((result) => {
                    return <ClassList key={result.fieldName} fieldName={result.fieldName} classes={result.classes}/>
                })}
            </section>
            <h3 className="heading-band">Equipment</h3>
            <HomePageSection data={equipment}/>
            <h3 className="heading-band">Scholarly Magic</h3>
            <HomePageSection data={scholarly}/>
            <footer></footer>
        </main>
    );
  }