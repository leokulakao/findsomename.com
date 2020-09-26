const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const Link = require('../models/linkModel');
const errorHandler = require('../utils/errorHandler');

module.exports.getLinkById = async (req, res) => {
    try {
        let result;
        const id = req.query ? req.query.id : '';
        if (id !== '' && Buffer.byteLength(id) === 24) {
            const candidate = await Link.findOne({_id: id});
            result = [];
            await result.push(candidate);
            if (candidate) {
                res.status(200).json({
                    status: 200,
                    message: 'Finded all items',
                    data: result,
                });
            } else {
                res.status(409).json({
                    status: 409,
                    message: 'Conflict',
                    data: {},
                });
            }
        } else {
            res.status(409).json({
                status: 409,
                message: 'Conflict',
                data: {},
            });
        }
    } catch (e) {
        errorHandler(req, e);
    }
}

module.exports.addLink = async (req, res) => {
    try {
        const idLabel = req.body.id_label ? req.body.id_label : '';
        const dateFrom = req.body.date_from ? new Date(req.body.date_from) : new Date();
        const dateTo = req.body.date_to ? new Date(req.body.date_to) : '';

        const candidate = await Link.findOne({id_label: idLabel});

        console.log(candidate);
        console.log(dateFrom);
        console.log(dateTo);

        if (candidate) {
            res.status(409).json({
                status: 409,
                message: 'Conflict',
                data: {},
            });
        } else {
            const newLink = await new Link({
                id_label: idLabel,
                status: true,
                date_from: dateFrom,
                date_to: dateTo,
            }).save();
    
            res.status(201).json({
                status: 201,
                message: 'Created',
                data: newLink,
            });
        }
    } catch (e) {
        errorHandler(req, e);
    }
};

module.exports.deleteLink = async (req, res) => {
    console.log(req, res);
}
