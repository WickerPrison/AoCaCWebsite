const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  console.log("wrong route");
  return res.send('Wrong route!');
});

module.exports = router;