const router = require('express').Router();
const SpellEffect = require('../../models/SpellEffect');

router.get('/spellEffects', async (req, res) => {
    const spellEffects = await SpellEffect.find().catch((err) =>{
        res.json(err)
    });
    res.json(spellEffects);
});

module.exports = router;