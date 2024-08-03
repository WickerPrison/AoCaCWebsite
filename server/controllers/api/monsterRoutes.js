const router = require('express').Router();
const {User, Attack, Monster} = require('../../models');
const { authMiddleware } = require('../../Utils/auth');

router.get("/", async (req, res) => {
    const monsters = await Monster.find().populate('attacks').catch(err => {
        console.log(err);
        res.json(err);
    });
    res.json(monsters)
});

router.post('/', async (req, res) => {
    try{
        const monster = await Monster.create(req.body);
        res.json(monster);
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
})

router.put('/', async (req, res) => {
    const monster = await Monster.findByIdAndUpdate(req.body._id, req.body, {new: true}).catch(err => {
        console.log(err);
        res.json(err);
    })
    res.json(monster);
})

router.get('/attacks', async (req, res) => {
    const attacks = await Attack.find().catch(err => {
        res.json(err);
    })
    res.json(attacks);
});

router.get("/:username", async (req, res) => {
    const monsters = await Monster.find({username: req.params.username}).populate('attacks').sort("name").catch(err => {
        res.json(err);
    });
    res.json(monsters);
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