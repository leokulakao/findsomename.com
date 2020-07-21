const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({
        email: req.body.email,
    });
    if (candidate) {
        // login
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            // generate token
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id,
            }, keys.jwt, { expiresIn: 60 * 60 });

            res.status(200).json({
                status: 200,
                message: 'Token',
                data: `Bearer ${token}`,
            });
        } else {
            res.status(401).json({
                status: 401,
                message: 'Password is not compare',
                data: {},
            });
        }
    } else {
        // Error dasn´t exist
        res.status(404).json({
            status: 404,
            message: 'Not Found',
            data: {},
        });
    }
};

module.exports.register = async (req, res) => {
    // email password
    const candidate = await User.findOne({
        email: req.body.email,
    });

    if (candidate) {
        // User exist
        res.status(409).json({
            status: 409,
            message: 'Conflict',
            data: {},
        });
    } else {
        // Add user
        const salt = bcrypt.genSaltSync(10);
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt),
        });
        try {
            await user.save();
            res.status(201).json({
                status: 201,
                message: 'Created',
                data: user,
            });
        } catch (e) {
            errorHandler(res, e);
        }
    }
};
