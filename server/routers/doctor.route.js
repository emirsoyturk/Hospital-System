const express = require('express')
const router = express.Router()
const { sequelize } = require('../models')
const { queries } = require('../queries')

router.route('/fetchFields').get(async (req, res) => {
    const fields = await sequelize.query(queries['find-all-fields'])
    res.json(fields);
});

router.route('/fetchByHospital').get(async (req, res) => {
    let hospitalName = req.query.name
    const doctors = await sequelize.query(queries['find-all-doctors-by-hospital'] + "'" + hospitalName.substring(1) + "'")
    console.log(doctors)
    res.json(doctors);
});

router.route('/fetchDoctorNameWithID').get(async (req, res) => {
    let doctorID = req.query.id
    const doctor = await sequelize.query(queries['find-doctor-name-by-id'] + "'" + doctorID + "'")
    console.log(doctor)
    res.json(doctor);
});

router.route('/appointments').get(async (req, res) => {
    let doctorID = req.query.id
    const appointments = await sequelize.query(queries['find-appointments-by-doctor-id'] + "'" + doctorID + "'")
    console.log(appointments)
    res.json(appointments);
});


router.route('/futureAppointments').get(async (req, res) => {
    let doctorID = req.query.id
    const appointments = await sequelize.query(queries['find-appointments-by-doctor-id-after-today'] + "'" + doctorID + "'")
    console.log(appointments)
    res.json(appointments);
});

router.route('/recentAppointments').get(async (req, res) => {
    let doctorID = req.query.id
    const appointments = await sequelize.query(queries['find-appointments-by-doctor-id-before-today'] + "'" + doctorID + "'")
    console.log(appointments)
    res.json(appointments);
});


module.exports = router;