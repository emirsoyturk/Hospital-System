const express = require('express')
const router = express.Router()
const { sequelize } = require('../models')
const { queries } = require('../queries')

router.route('/fetch').get((req, res, next) => {
    res.json("Deneme");
});

router.route('/fetchByHospital').get(async (req, res) => {
    let hospitalName = req.query.name
    const doctors = await sequelize.query(queries['find-all-doctors-by-hospital'] + "'" + hospitalName.substring(1) + "'")
    console.log(doctors)
    res.json(doctors);
});

module.exports = router;