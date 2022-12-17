const express = require('express')
const router = express.Router()
const { sequelize } = require('../models')
const { queries } = require('../queries')

router.route('/fetch-names').get(async (req, res, next) => {
    const hospitals = await sequelize.query(queries['find-all-hospital-names'])
    res.json(hospitals);
});

router.route('/fetch-all-cities').get(async (req, res, next) => {
    const cities = await sequelize.query(queries['find-all-cities'])
    res.json(cities);
});

router.route('/fetch-all-district').get(async (req, res, next) => {
    const district = await sequelize.query(queries['find-all-district'])
    res.json(district);
});

router.route('/').get(async (req, res, next) => {
    const hospitals = await sequelize.query(queries['find-all-hospital'])
    res.json(hospitals);
});

module.exports = router;