const Name = require('../models/nameModel');
const errorHandler = require('../utils/errorHandler');
const { off } = require('../models/nameModel');

module.exports.getAllNames = async (req, res) => {
    try {
        const namesBox = [];
        await Name.find({}, (err, names) => {
            names.forEach((name, i) => {
                namesBox.push(name);
            })
        });
        res.status(200).json({
            status: 200,
            message: 'Finded all items',
            data: namesBox,
        });
    } catch (e) {
        errorHandler(req, e);
    }
};

module.exports.addName = async (req, res) => {
    try {
        const nameCandidate = await Name.findOne({
            name: req.body.name
        })

        if (nameCandidate) {
            res.status(409).json({
                status: 409,
                message: 'Conflict',
                data: {},
            });
        } else {
            const newName = await new Name({
                name: req.body.name,
                population: req.body.population
            }).save();

            console.log(newName);

            res.status(201).json({
                status: 201,
                message: 'Created',
                data: newName,
            });
        }
    } catch (e) {
        errorHandler(req, e);
    }
}

module.exports.deleteName = async (req, res) => {
    try {
        await Name.remove({_id: req.body.id});
        res.status(200).json({
            status: 200,
            message: 'Deleted',
            data: req.body.id
        })
    } catch (e) {
        errorHandler(req, e);
    }
}

module.exports.getNamesByLetter = (req, res) => {
    res.status(200).json({
        names: 'get names by letter',
    });
};
