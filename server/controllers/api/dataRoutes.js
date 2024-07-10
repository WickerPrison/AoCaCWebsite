const router = require('express').Router();
const { SpellEffect, Talent, InnateSpell, Fundamentalist, CriticalInjuries } = require('../../models');

router.get('/spelleffects', async (req, res) => {
    const spellEffects = await SpellEffect.find().catch((err) =>{
        res.json(err)
    });
    res.json(spellEffects);
});

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

module.exports = router;