module.exports = (res, error) => {
    res.status(500).json({
        status: 500,
        message: error.message ? error.message : error,
    });
};
