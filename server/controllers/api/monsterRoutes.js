const router = require('express').Router();
const {User, Attack, Monster} = require('../../models');
const { authMiddleware } = require('../../Utils/auth');

router.get("/", authMiddleware, async (req, res) => {
    let monsters;
    if(req.user){
        monsters = await Monster.find().or([{public: true}, {username: req.user.username}]).populate('attacks').catch(err => {
            console.log(err);
            res.json(err);
        });
    }
    else{
        monsters = await Monster.find({public: true}).populate('attacks').catch(err => {
            console.log(err);
            res.json(err);
        });
    }
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

router.get('/attacks/:username', async (req, res) => {
    const attacks = await Attack.find({username: req.params.username}).sort("name").catch(err => {
        res.json(err);
    })
    res.json(attacks);
})

router.post('/attack', async (req, res) => {
    try{
        if(await Attack.exists({name: req.body.name})){
            res.json("Attack name taken");
            return;
        }
        
        const attack = await Attack.create(req.body);
        res.json(attack);
    }
    catch(err){
        res.json(err);
    }
});

router.put('/attack', async (req, res) => {
    const dbEntry = await Attack.findById(req.body._id);
    if(dbEntry.name != req.body.name){
        if(await Attack.exists({name: req.body.name})){
            res.json("Attack name taken");
            return;
        }
    }

    const attack = await Attack.findByIdAndUpdate(req.body._id, req.body, {new: true}).catch(err => {
        res.json(err);
    });
    res.json(attack);
})

router.delete('/attack/:id', async (req, res) => {
    const attack = await Attack.deleteOne({_id: req.params.id}).catch((err) => {
        res.json(err);
    });

    const monsters = await Monster.find({attacks: req.params.id});
    for(let i = 0; i < monsters.length; i++){
        monsters[i].attacks.splice(monsters[i].attacks.indexOf(req.params.id), 1);
        monsters[i].save();
    }
    res.json("Deleted");
})

router.get('/encounterBuilder', authMiddleware, async (req, res) => {
    const data = {};
    let monsters;

    if(req.user){
        const user = await User.findById(req.user._id).catch(err => {
            res.json(err);
        });
        data.encounterData = user.encounterData;
        data.initiativeTracker = user.initiativeTracker;

        monsters = await Monster.find().or([{public: true}, {username: req.user.username}]).populate('attacks').catch(err => {
            res.json(err);
        });
    }
    else{
        monsters = await Monster.find({public: true}).populate('attacks').catch(err => {
            res.json(err);
        });
    }


    data.monsters = monsters;
    res.json(data);
});

router.put('/encounterBuilder', authMiddleware, async (req, res) => {    
    if(!req.user) {
        res.json("Authentication Error");
        return;
    }
    const user = await User.findByIdAndUpdate(req.user._id,
        {
            encounterData: req.body.monsters,
            initiativeTracker: req.body.initiativeTracker
        },
        {new: true})
        .catch((err) => {
            res.json(err);
        }
    );
    res.json("Monsters Saved");
});

router.get("/myMonsters/:username", async (req, res) => {
    const monsters = await Monster.find({username: req.params.username}).populate('attacks').sort("name").catch(err => {
        res.json(err);
    });
    res.json(monsters);
});

module.exports = router;