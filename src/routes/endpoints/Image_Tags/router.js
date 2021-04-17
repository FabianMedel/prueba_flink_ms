const router = require('express').Router();
const utils = require('./../utils');

router.route('/').get(async (req,res) =>{
    const images = await utils.process_image()
    res.json({images});
});

module.exports = router;