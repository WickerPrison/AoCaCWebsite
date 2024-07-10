const router = require('express').Router();
const SpellEffect = require('../../models/SpellEffect');

router.get('/spellEffects', async (req, res) => {
    const spellEffects = await SpellEffect.find().catch((err) =>{
        console.log("error", err);
        res.json(err)
    });
    console.log("no error");
    res.json(spellEffects);
});

module.exports = router;