const express = require('express')
const router = express.Router()
const { sequelize } = require('../models')
const { queries } = require('../queries')

router.route('/fetch-names').get(async (req, res, next) => {
    const hospitals = await sequelize.query(queries['find-all-hospital-names'])
    res.json(hospitals);
});

router.route('/').get(async (req, res, next) => {
    const hospitals = await sequelize.query(queries['find-all-hospital'])
    res.json(hospitals);
});

module.exports = router;