const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Label = require('../models/labelModel');
const NameRu = require('../models/nameRuModel');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.getAllLabels = async (req, res) => {
    try {
        let result;

        const offset = req.query ? req.query.offset !== '' ? ++req.query.offset - 1 : null : null;
        const limit = req.query ? req.query.limit !== '' ? ++req.query.limit - 1 : null : null;
        const token = req.headers ? req.headers.authorization.split(' ')[1] : '';

        const decoded = jwt.decode(token);
        const candidate = await User.findOne({
            email: decoded.email,
        });

        const labels = await Label.find({user: candidate._id}).skip(offset).limit(limit);

        const namesOfLabels = labels.map(async (element, i) => {
            if (element.ids.length !== 0) {
                return await NameRu.find({_id: element.ids});
            }
        });

        result = [];
        for (let i = 0; i < labels.length; i++) {
            console.log();
            await result.push({
                name: labels[i].name,
                names: await namesOfLabels[i],
                _id: labels[i]._id,
                user: labels[i].user
            })
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

module.exports.addLabel = async (req, res) => {
    try {
        // console.log(req);
        const token = req.headers ? req.headers.authorization.split(' ')[1] : '';
        const name = req.body ? req.body.name ? req.body.name : '' : '';
        const ids = req.body ? req.body.ids ? req.body.ids.split(',') : [] : [];

        const decoded = jwt.decode(token);
        const candidate = await User.findOne({
            email: decoded.email,
        });
        // console.log(candidate._id);
        // console.log(ids);
        const newLabel = await new Label({
            user: candidate._id,
            name: name,
            ids: ids
        }).save();
        // console.log(newLabel);
        res.status(201).json({
            status: 201,
            message: 'Created',
            data: newLabel,
        });
    } catch (e) {
        console.log(e);
        errorHandler(req, e);
    }
}