const router = require('express').Router();


router.use('/hello', require('./endpoints/Hello/router'));

module.exports = router;