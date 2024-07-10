const router = require('express').Router();
const SpellEffect = require('../../models/SpellEffect');
const Talent = require('../../models/Talent');

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
})

module.exports = router;