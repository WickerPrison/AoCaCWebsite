const router = require('express').Router();
const {User} = require('../../models');
const { authMiddleware } = require('../../Utils/auth');

router.get('/', authMiddleware, async (req, res) => {
    if(!req.user){
        res.json("Authentication Error");
        return;
    }

    const user = await User.findById(req.user._id).catch((err) => {
        res.json(err);
    })
    res.json(user.rolls);
});

router.put('/', authMiddleware, async (req, res) => {
    if(!req.user) {
        res.json("Authentication Error");
        return;
    }

    const user = await User.findByIdAndUpdate(req.user._id,
        {
            rolls: req.body.rolls
        },
        {new: true})
        .catch((err) => {
            res.json(err);
        }
    );
    res.json(user);
});

module.exports = router;