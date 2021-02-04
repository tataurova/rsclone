const router = require('express').Router();
let HumanLookingRelatives = require('../models/Human-looking-relatives');

router.route('/').get((req, res) => {
    HumanLookingRelatives.find()
        .then(peopleLookingRelatives => res.json(peopleLookingRelatives))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    HumanLookingRelatives.findById(req.params.id)
        .then(humanLookingRelatives => res.json(humanLookingRelatives))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    HumanLookingRelatives.findByIdAndDelete(req.params.id)
        .then(() => res.json('Human Looking Relatives deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const birthDay = Date.parse(req.body.birthDay);
    const age = Number(req.body.age);
    const city = req.body.city;
    const dateFind = Date.parse(req.body.dateFind);
    const description = req.body.description;
    const clothes = req.body.clothes;
    const addDescription = req.body.addDescription;
    const photo = req.body.photo;
    const coordinator = req.body.coordinator;

    const newHumanLookingRelatives = new HumanLookingRelatives({
        name,
        birthDay,
        age,
        city,
        dateFind,
        description,
        clothes,
        addDescription,
        photo,
        coordinator
    });

    newHumanLookingRelatives.save()
        .then(() => res.json('New Human Looking For Relatives added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    HumanLookingRelatives.findById(req.params.id)
        .then(humanLookingRelatives => {
            humanLookingRelatives.name = req.body.name;
            humanLookingRelatives.birthDay = Date.parse(req.body.birthDay);
            humanLookingRelatives.age = Number(req.body.age);
            humanLookingRelatives.city = req.body.city;
            humanLookingRelatives.dateFind = Date.parse(req.body.dateFind);
            humanLookingRelatives.description = req.body.description;
            humanLookingRelatives.clothes = req.body.clothes;
            humanLookingRelatives.addDescription = req.body.addDescription;
            humanLookingRelatives.photo = req.body.photo;
            humanLookingRelatives.isActiveSearch = Boolean(req.body.isActiveSearch);
            humanLookingRelatives.coordinator = req.body.coordinator;


            humanLookingRelatives.save()
                .then(() => res.json('Human Looking For Relatives updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;