const router = require('express').Router();

router.route('/').get((req,res) =>{
    msg = `Hello ${req.query.name || "world"} from get request!`;
    res.json({msg});
});

module.exports = router;