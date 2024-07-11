const router = require('express').Router();
const { SpellEffect, Talent, InnateSpell, Fundamentalist, CriticalInjuries, Equipment } = require('../../models');

router.get('/allspelleffects', async (req, res) => {
    const spellEffects = await SpellEffect.find().catch((err) =>{
        res.json(err)
    });
    res.json(spellEffects);
});

router.get('/spelleffects', async (req, res) => {
    const data = await SpellEffect.find().catch((err) => {
        res.json(err)
    });

    let spellEffects = {
        metamagic: [],
        initiate: [],
        adept: [],
        magister: [],
        arcanist: []
    }

    for(let i = 0; i < data.length; i++){
        switch(data[i].Tier){
            case "Metamagic":
                spellEffects.metamagic.push(data[i]);
                break;
            case "Initiate":
                spellEffects.initiate.push(data[i]);
                break;
            case "Adept":
                spellEffects.adept.push(data[i]);
                break;
            case "Magister":
                spellEffects.magister.push(data[i]);
                break;
            case "Arcanist":
                spellEffects.arcanist.push(data[i]);
                break;
        }
    }
    res.json(spellEffects);
})

router.get('/talents', async (req, res) => {
    const talents = await Talent.find().catch((err) => {
        res.json(err);
    });
    res.json(talents);
});

router.get('/innatespells', async (req, res) => {
    const innateSpells = await InnateSpell.find().catch((err) => {
        res.json(err);
    });
    res.json(innateSpells);
});

router.get('/innatespells/:class', async (req, res) => {
    if(req.params.class == "Fundamentalist"){
        const innateSpells = await Fundamentalist.find().catch((err) => {
            res.json(err);
        });
        res.json(innateSpells);
    }
    else{
        const innateSpells = await InnateSpell.find({Classes: req.params.class}).catch((err) => {
            res.json(err);
        });
        res.json(innateSpells);
    }
});

router.get('/crits', async (req, res) => {
    const crits = await CriticalInjuries.find().sort('d100min').catch((err) => {
        res.json(err);
    });
    res.json(crits);
});

router.get('/equipment', async (req, res) => {
    const equipment = await Equipment.find({Category: "General"}).sort('Name').catch((err) => {
        res.json(err);
    });
    res.json(equipment);
});

router.get('/consumeables', async (req, res) => {
    const data = await Equipment.find({Category: {$nin: "General"}}).sort('Name').catch((err) => {
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
})

module.exports = router;