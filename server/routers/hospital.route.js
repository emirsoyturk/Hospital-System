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

router.route('/fetch-all-district-by-city').get(async (req, res, next) => {
    const districts = await sequelize.query(queries['find-all-district-by-city'] + req.query.city)
    res.json(districts);
});

router.route('/fetch-all-field-by-district').get(async (req, res, next) => {
    const fields = await sequelize.query(queries['find-all-fields-by-district'] + req.query.district)
    res.json(fields);
});

router.route('/fetch-all-hospital-by-field-and-district').get(async (req, res, next) => {
    console.log(queries['find-all-hospital-by-field-and-district'] + req.query.field + " AND district = " + req.query.district)

    const hospitals = await sequelize.query(queries['find-all-hospital-by-field-and-district'] + req.query.field + " AND hastane.ilce = " + req.query.district)
    res.json(hospitals);
});

router.route('/fetch-all-doctors-by-field-and-hospital').get(async (req, res, next) => {
    const doctors = await sequelize.query(queries['find-all-doctors-by-field-and-hospital'] + req.query.field + " AND hastaneAdi = " + req.query.hospital)
    res.json(doctors);
});

router.route('/').get(async (req, res, next) => {
    const hospitals = await sequelize.query(queries['find-all-hospital'])
    res.json(hospitals);
});

module.exports = router;