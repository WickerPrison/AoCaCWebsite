const router = require('express').Router();
const {User, Attack, Monster} = require('../../models');
const { authMiddleware } = require('../../Utils/auth');

router.get("/", async (req, res) => {
    const monsters = await Monster.find().catch(err => {
        res.json(err);
    });
    res.json(monsters)
});

router.post('/', async (req, res) => {
    try{
        req.body.attacks = [];
        for(let i = 0; i < req.body.attackIds.length; i++){
            let attack = await Attack.findById({_id: req.body.attackIds[i]});
            req.body.attacks.push(attack);
        }
        const monster = await Monster.create(req.body);
        res.json(monster);
    }
    catch(err){
        res.json(err);
    }
})

router.get('/attacks', async (req, res) => {
    const attacks = await Attack.find().catch(err => {
        res.json(err);
    })
    res.json(attacks);
});

router.get('/attacks/:username', async (req, res) => {
    const attacks = await Attack.find({username: req.params.username}).sort("name").catch(err => {
        res.json(err);
    })
    res.json(attacks);
})

router.post('/attack', async (req, res) => {
    try{
        const attack = await Attack.create(req.body);
        res.json(attack);
    }
    catch(err){
        res.json(err);
    }
});

router.put('/attack', async (req, res) => {
    const attack = await Attack.findByIdAndUpdate(req.body._id, req.body, {new: true}).catch(err => {
        res.json(err);
    });
    res.json(attack);
})

module.exports = router;