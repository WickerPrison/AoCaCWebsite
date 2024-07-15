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
        for(let i = 0; i < req.body.attackNames.length; i++){
            let attack = await Attack.findOne({name: req.body.attackNames[i]});
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

router.post('/attack', async (req, res) => {
    try{
        const attack = await Attack.create(req.body);
        res.json(attack);
    }
    catch(err){
        res.json(err);
    }
});

module.exports = router;