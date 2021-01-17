const router = require('express').Router();
let HumanLost = require('../models/Human-lost');

router.route('/').get((req, res) => {
    HumanLost.find()
        .then(peopleLost => res.json(peopleLost))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    HumanLost.findById(req.params.id)
        .then(humanLost => res.json(humanLost))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    HumanLost.findByIdAndDelete(req.params.id)
        .then(() => res.json('Human Lost deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const birthDay = Date.parse(req.body.birthDay);
    const age = Number(req.body.age);
    const city = req.body.city;
    const dateLose = Date.parse(req.body.dateLose);
    const description = req.body.description;
    const clothes = req.body.clothes;
    const addDescription = req.body.addDescription;
    const photo = req.body.photo;
    const isActiveSearch = Boolean(req.body.isActiveSearch);
    const coordinator = req.body.coordinator;

    const newHumanLost = new HumanLost({
        name,
        birthDay,
        age,
        city,
        dateLose,
        description,
        clothes,
        addDescription,
        photo,
        isActiveSearch,
        coordinator
    });

    newHumanLost.save()
        .then(() => res.json('New Human Lost added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    HumanLost.findById(req.params.id)
        .then(humanLost => {
            humanLost.name = req.body.name;
            humanLost.birthDay = Date.parse(req.body.birthDay);
            humanLost.age = Number(req.body.age);
            humanLost.city = req.body.city;
            humanLost.dateLose = Date.parse(req.body.dateLose);
            humanLost.description = req.body.description;
            humanLost.clothes = req.body.clothes;
            humanLost.addDescription = req.body.addDescription;
            humanLost.photo = req.body.photo;
            humanLost.isActiveSearch = Boolean(req.body.isActiveSearch);
            humanLost.coordinator = req.body.coordinator;


            humanLost.save()
                .then(() => res.json('Human Lost updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;