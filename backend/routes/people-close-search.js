const router = require('express').Router();
let HumanLost = require('../models/Human-lost');
let HumanLookingRelatives = require('../models/Human-looking-relatives');

router.route('/').get(async (req, res) => {
    try {
        const peopleLost = await HumanLost.find({
            isActiveSearch: false
        });
        const peopleLookingForRelatives = await HumanLookingRelatives.find({
            isActiveSearch: false
        });

        const result = peopleLost.concat(peopleLookingForRelatives);

        res.json(result);
    } catch(err) {
        res.status(400).json('Error: ' + err)
    }
});

router.route('/:id').get(async (req, res) => {
    try {
        const result = await HumanLookingRelatives.findById(req.params.id) ||
            await HumanLost.findById(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(400).json('Error: ' + err)
    }
    
});

module.exports = router;