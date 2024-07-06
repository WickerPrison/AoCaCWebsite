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
    const user = await User.create(req.body).catch((err) =>{
        res.json(err);
    });

    if(user){
        const token = signToken(user);
        res.json(token);
    }
    else{
        console.log("No user");
    }
})

router.post('/Login', async (req, res) => {
    const user = await User.findOne({username: req.body.username}).catch((err) =>{
        res.json(err);
    });

    console.log(user);
    if(!user){
        res.json("Auth Error");
        return;
    }

    const correctPw = await user.isCorrectPassword(req.body.password);
    if(!correctPw){
        res.json("Auth Error");
        return;
    }

    console.log("test");
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