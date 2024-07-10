const router = require('express').Router();
const {User} = require('../../models');
const { signToken, AuthenticationError } = require('../../Utils/auth');

router.get('/', async (req, res) => {
        const users = await User.find().catch((err) =>{
            res.json(err)
        });
        res.json(users);
})

router.get('/:id', async (req, res) => {
    const users = await User.findById(req.params.id).catch((err) =>{
        res.json(err)
    });
    res.json(users);
})

router.post('/', async (req, res) => {
    try{
        const user = await User.create(req.body);
        const token = signToken(user);
        res.json(token);
    }
    catch{
        res.json("In use");
    }
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({username: req.body.username}).catch((err) =>{
        res.json(err);
    });

    if(!user){
        res.json("Auth Error");
        return;
    }

    const correctPw = await user.isCorrectPassword(req.body.password);
    if(!correctPw){
        res.json("Auth Error");
        return;
    }

    const token = signToken(user);
    res.json(token);
})

router.put('/:id', async (req, res) => {
    const users = await User.findByIdAndUpdate(req.params.id, 
        {
            username: req.body.username,
            email: req.body.email
        }, 
        {new: true})
        .catch((err) =>{
        res.json(err)
    });
    res.json(users);
})

router.delete('/:id', async (req, res) =>{
    const users = await User.findByIdAndDelete(req.params.id).catch((err) =>{
        res.json(err)
    });
    res.json(users);
})

module.exports = router;