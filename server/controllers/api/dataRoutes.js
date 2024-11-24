const router = require('express').Router();
const { 
    SpellEffect, 
    Talent, 
    InnateSpell, 
    Fundamentalist, 
    CriticalInjuries, 
    Equipment,
    Weapon,
    WeaponMod,
    WeaponProp,
    Enchantment
} = require('../../models');

// router.get('/allspelleffects', async (req, res) => {
//     const spellEffects = await SpellEffect.find().sort("Tier").catch((err) =>{
//         res.json(err)
//     });
//     res.json(spellEffects);
// });

// router.get('/spelleffects', async (req, res) => {
//     const data = await SpellEffect.find().sort("Name").catch((err) => {
//         res.json(err)
//     });

//     let spellEffects = {
//         metamagic: [],
//         initiate: [],
//         adept: [],
//         magister: [],
//         arcanist: []
//     }

//     for(let i = 0; i < data.length; i++){
//         switch(data[i].Tier){
//             case "Metamagic":
//                 spellEffects.metamagic.push(data[i]);
//                 break;
//             case "Initiate":
//                 spellEffects.initiate.push(data[i]);
//                 break;
//             case "Adept":
//                 spellEffects.adept.push(data[i]);
//                 break;
//             case "Magister":
//                 spellEffects.magister.push(data[i]);
//                 break;
//             case "Arcanist":
//                 spellEffects.arcanist.push(data[i]);
//                 break;
//         }
//     }
//     res.json(spellEffects);
// })

// router.get('/talents', async (req, res) => {
//     const talents = await Talent.find().sort('Name').catch((err) => {
//         res.json(err);
//     });
//     res.json(talents);
// });

// router.get('/innatespells', async (req, res) => {
//     const innateSpells = await InnateSpell.find().catch((err) => {
//         res.json(err);
//     });
//     res.json(innateSpells);
// });

// router.get('/innatespells/:class', async (req, res) => {
//     if(req.params.class == "Fundamentalist"){
//         const innateSpells = await Fundamentalist.find().catch((err) => {
//             res.json(err);
//         });
//         res.json(innateSpells);
//     }
//     else{
//         const innateSpells = await InnateSpell.find({Classes: req.params.class}).sort('Name').catch((err) => {
//             res.json(err);
//         });
//         res.json(innateSpells);
//     }
// });

// router.get('/crits', async (req, res) => {
//     const crits = await CriticalInjuries.find().sort('d100min').catch((err) => {
//         res.json(err);
//     });
//     res.json(crits);
// });

router.get('/equipment', async (req, res) => {
    const equipment = await Equipment.find({Category: "General"}).sort('Name').catch((err) => {
        res.json(err);
    });
    res.json(equipment);
});

router.get('/consumeables', async (req, res) => {
    const data = await Equipment.find({Category: ["Bomb", "Medicinal", "Potion", "Misc"]}).sort('Name').catch((err) => {
        res.json(err);
    });

    let consumeables = {
        bombs: [],
        medicinal: [],
        potion: [],
        misc: []
    }

    for(let i = 0; i < data.length; i++){
        switch(data[i].Category){
            case "Bomb":
                consumeables.bombs.push(data[i]);
                break;
            case "Medicinal":
                consumeables.medicinal.push(data[i]);
                break;
            case "Potion":
                consumeables.potion.push(data[i]);
                break;
            case "Misc":
                consumeables.misc.push(data[i]);
                break;
        }
    }
    res.json(consumeables);
});

router.get('/weaponsdata', async (req, res) => {
    let data = {};

    const response = await Weapon.find().sort("Name").catch((err) => {
        res.json(err);
    });
    let weapons = {
        brawl: [],
        light: [],
        heavy: [],
        ranged: []
    }
    for(let i = 0; i < response.length; i++){
        switch(response[i].Skill){
            case "Brawl":
                weapons.brawl.push(response[i]);
                break;
            case "Light Weapons":
                weapons.light.push(response[i]);
                break;
            case "Heavy Weapons":
                weapons.heavy.push(response[i]);
                break;
            case "Ranged":
                weapons.ranged.push(response[i]);
                break;
        }
    }
    data.weapons = weapons;

    const modResponse = await WeaponMod.find().sort("Name").catch((err) => {
        res.json(err);
    });
    mods = {};
    mods.regular = modResponse.filter(mod => mod.Name == "");
    mods.masterwork = modResponse.filter(mod => mod.Name != "");
    data.mods = mods;

    const propResponse = await WeaponProp.find().sort("Name").catch((err) => {
        res.json(err);
    });
    data.props = propResponse;

    res.json(data);
});

router.get('/magicitems', async (req, res) => {
    let data = {};
    const wondrousItems = await Equipment.find({Category: "Wondrous"}).sort('Name').catch((err) => {
        res.json(err);
    })
    data.wondrous = wondrousItems;

    const enchantments = await Enchantment.find().sort('Name').catch((err) => {
        res.json(err);
    });
    data.enchantments = enchantments;

    res.json(data);
})

module.exports = router;