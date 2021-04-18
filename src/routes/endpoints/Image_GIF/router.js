const router = require('express').Router();
const utils = require('./../utils');

router.route('/').get(async (req,res) =>{
    const images = await utils.process_image()
    console.log(images[0].url)
    msg = `<center><img src="${images[0].url}" alt="Los Tejos" /></center>`;
    res.send(msg);
});

module.exports = router;