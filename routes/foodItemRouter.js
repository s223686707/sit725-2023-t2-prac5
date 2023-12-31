let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.get('/', (req, res) => {
    controller.getFoodOrder(req, res);
});

router.post('/', (req,res)=>{
    controller.saveFoodOrder(req, res);
});

module.exports = router;