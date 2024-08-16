const router = require('express').Router();

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const dataRoutes = require('./dataRoutes');
router.use('/data', dataRoutes);

const rollRoutes = require('./rollRoutes');
router.use('/rolls', rollRoutes);

const monsterRoutes = require('./monsterRoutes');
router.use('/monsters', monsterRoutes);

module.exports = router;