const NameRu = require('../models/nameRuModel');
const errorHandler = require('../utils/errorHandler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports.getAllNames = async (req, res) => {
    try {

        let result;

        const keyword = req.query ? req.query.keyword !== '' ? req.query.keyword : '' : '';
        const offset = req.query ? req.query.offset !== '' ? ++req.query.offset - 1 : null : null;
        const limit = req.query ? req.query.limit !== '' ? ++req.query.limit - 1 : null : null;
        const population = req.query ? req.query.population === 'true' ? true : null : null;
        const token = req.headers ? req.headers.authorization.split(' ')[1] : '';

        // console.log('Limit', limit);
        // console.log('Offset', offset);
        // console.log('Population', population);

        const decoded = jwt.decode(token);
        const candidate = await User.findOne({
            email: decoded.email,
        });

        let permission;
        if (candidate) {
            if (candidate.permission === 'root') {
                permission = 'root';
            } else if (candidate.permission === 'admin') {
                permission = 'admin';
            } else if (candidate.permission === 'user') {
                permission = 'user'
            }
        }
        const hided = permission === 'root' || permission === 'admin' ? req.query ? req.query.hided === 'true' ? true : false : false : true;

        console.log('HidedNames', hided);

        if (population) {
            if (hided) {
                result = await NameRu.find({name: {$regex: keyword || '', $options: 'si'}, $or: [{hide: undefined}, {hide: false}]}, (err) => {
                    if (err) {
                        console.log(err);
                    }
                }).skip(offset).limit(limit).sort({quantity: population ? 'descending': null});
            } else {
                result = await NameRu.find({name: {$regex: keyword || '', $options: 'si'}}, (err) => {
                    if (err) {
                        console.log(err);
                    }
                }).skip(offset).limit(limit).sort({quantity: population ? 'descending': null});
            }
        } else {
            if (hided) {
                result = await NameRu.find({name: {$regex: keyword || '', $options: 'si'}, $or: [{hide: undefined}, {hide: false}]}, (err) => {
                    if (err) {
                        console.log(err);
                    }
                }).skip(offset).limit(limit);
            } else {
                result = await NameRu.find({name: {$regex: keyword || '', $options: 'si'}}, (err) => {
                    if (err) {
                        console.log(err);
                    }
                }).skip(offset).limit(limit);
            }
            result.sort((a, b) => a.name.toLowerCase() === keyword.toLowerCase() ? -1 : b.name.toLowerCase() === keyword.toLowerCase() ? 1 : 0);
        }

        res.status(200).json({
            status: 200,
            message: 'Finded all items',
            data: result,
        });
        
    } catch (e) {
        errorHandler(req, e);
    }
};

module.exports.addName = async (req, res) => {
    try {
        const nameCandidate = await NameRu.findOne({
            name: req.body.name
        })

        if (nameCandidate) {
            res.status(409).json({
                status: 409,
                message: 'Conflict',
                data: {},
            });
        } else {
            const newName = await new NameRu({
                oldId: req.body.oldId,
                name: req.body.name,
                sex: req.body.sex,
                quantity: req.body.quantity,
                quantityDate: req.body.quantityDate
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

module.exports.editName = async (req, res) => {
    try {
        const hide = req.body ? req.body.hide === true ? true : false : false;
        console.log(hide);
        await NameRu.updateOne({_id: req.body.id}, {hide: hide});
        const candidate = await NameRu.find({_id: req.body.id});
        console.log(candidate);
        res.status(200).json({
            status: 201,
            message: 'Edited',
            data: req.body.id
        })
    } catch (e) {
        errorHandler(req, e);
    }
}

module.exports.deleteName = async (req, res) => {
    try {
        await NameRu.remove({_id: req.body.id});
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
