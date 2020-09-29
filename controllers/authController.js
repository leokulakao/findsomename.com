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
            res.status(402).json({
                status: 402,
                message: 'Password isnot compare',
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
            password: bcrypt.hashSync(req.body.password, salt)
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

module.exports.getUserWithToken = async (req, res) => {
    try {
        const token = req.headers ? req.headers.authorization.split(' ')[1] : null;

        const decoded = jwt.decode(token);

        const candidate = await User.findOne({
            email: decoded.email,
        });
        
        if (candidate) {
            res.status(200).json({
                status: 200,
                message: 'Data User',
                data: {
                    email: candidate.email,
                    id: candidate._id,
                    permission: candidate.permission
                },
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Not Found',
                data: {},
            });
        }
    } catch (e) {
        errorHandler(req, e);
    }
}

module.exports.getUsers = async (req, res) => {
    try {
        let result;

        const offset = req.query ? req.query.offset !== '' ? ++req.query.offset - 1 : null : null;
        const limit = req.query ? req.query.limit !== '' ? ++req.query.limit - 1 : null : null;

        result = await User.find({}).skip(offset).limit(limit);

        res.status(200).json({
            status: 200,
            message: 'Finded all users',
            data: result,
        });
    } catch (e) {
        errorHandler(req, e);
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        const id = req.body ? req.body.id : null;
        const candidate = await User.find({_id: id});
        
        if (candidate) {
            const newPermission = req.body ? req.body.permission === 'root' || req.body.permission === 'admin' || req.body.permission === 'user' ? req.body.permission : candidate[0].permission : candidate[0].permission;
            const salt = bcrypt.genSaltSync(10);
            const newPassword = req.body ? req.body.password ? bcrypt.hashSync(req.body.password, salt) : candidate[0].password : candidate[0].password;

            await User.updateOne({_id: id}, {permission: newPermission});
            await User.updateOne({_id: id}, {password: newPassword});

            res.status(200).json({
                status: 201,
                message: 'User Edited',
                data: id
            })
        } else {
            res.status(404).json({
                status: 404,
                message: 'User Not Found',
                data: {},
            });
        }
        
    } catch (e) {
        errorHandler(req, e);
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        const candidate = await User.find({_id: req.body.id});
        if (candidate) {
            await User.remove({_id: req.body.id});
            res.status(200).json({
                status: 201,
                message: 'User Deleted',
                data: req.body.id
            })
        } else {
            res.status(404).json({
                status: 404,
                message: 'User Not Found',
                data: {},
            });
        }
    } catch (e) {
        errorHandler(req, e);
    }
}