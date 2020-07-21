const Name = require('../models/nameModel');
const errorHandler = require('../utils/errorHandler');

module.exports.getAllNames = async (req, res) => {
    try {
        const name = await Name.find({
            name: req.params.name,
        });
        res.status(200).json({
            status: 200,
            message: 'Finded',
            data: name,
        });
    } catch (e) {
        errorHandler(req, e);
    }
};

module.exports.getNamesByLetter = (req, res) => {
    res.status(200).json({
        names: 'get names by letter',
    });
};
