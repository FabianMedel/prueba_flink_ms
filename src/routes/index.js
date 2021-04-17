const router = require('express').Router();

router.use('/image_gif', require('./endpoints/Image_GIF/router'));
router.use('/image_tags', require('./endpoints/Image_Tags/router'));


module.exports = router;