const router = require('express').Router();
const {User} = require('../../models');
const { signToken } = require('../../Utils/auth');

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
    const user = await User.create(req.body).catch((err) =>{
        res.json(err);
    });
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