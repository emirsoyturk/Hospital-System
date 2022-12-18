const express = require('express')
const router = express.Router()
const { sequelize } = require('../models')
const { queries, add_medicine, add_analysis, add_disease, add_report } = require('../queries')

router.route('/fetch').get(async (req, res, next) => {
    const id = req.query.id;
    const patient = await sequelize.query(queries['find-direct-patient-by-id'] + id)
    res.json(patient);
});

router.route('/fetch-all-medicines').get(async (req, res, next) => {
    const medicines = await sequelize.query(queries['find-all-medicines'])
    res.json(medicines);
});

router.route('/add-medicine').post(async (req, res, next) => {
    const medicine = req.body;
    await sequelize.query(add_medicine(medicine.detayNo, medicine.randevuNo, medicine.IlacAdi, medicine.Aciklama, medicine.Tur, medicine.Doz, medicine.Periyot))
    console.log(medicine);
    res.json(medicine);
});

router.route('/add-analysis').post(async (req, res, next) => {
    const analysis = req.body;
    await sequelize.query(add_analysis(analysis.detayNo, analysis.randevuNo, analysis.TestGorseli, analysis.Aciklama, analysis.Tur))
    console.log(analysis);
    res.json(analysis);
});

router.route('/add-disease').post(async (req, res, next) => {
    const disease = req.body;
    await sequelize.query(add_disease(disease.detayNo, disease.randevuNo, disease.Aciklama, disease.Semptom, disease.Tur))
    console.log(disease);
    res.json(disease);
});

router.route('/add-report').post(async (req, res, next) => {
    const report = req.body;
    await sequelize.query(add_report(report.detayNo, report.randevuNo, report.RaporSuresi, report.Aciklama, report.Tur))
    console.log(report);
    res.json(report);
});

router.route('/fetch-appointments').get(async (req, res, next) => {
    const id = req.query.id;
    const appointments = await sequelize.query(queries['find-appoinment-by-patient-id'] + id)
    res.json(appointments);
});

router.route('/fetch-recent-appointments').get(async (req, res, next) => {
    const id = req.query.id;
    const appointments = await sequelize.query(queries['find-recent-appointment-by-patient-id'] + id)
    res.json(appointments);
});

router.route('/fetch-future-appointments').get(async (req, res, next) => {
    const id = req.query.id;
    const appointments = await sequelize.query(queries['find-future-appointment-by-patient-id'] + id)
    res.json(appointments);
});

router.route('/fetch-patient-name').get(async (req, res, next) => {
    const id = req.query.token
    const patient = await sequelize.query(queries['find-patient-name-by-id'] + id)
    res.json(patient);
});

router.route('fetch-appointment-details').get(async (req, res, next) => {
    const id = req.query.id;
    const details = await sequelize.query(queries['find-appointment-details-by-id'] + id)
    res.json(details);
});

router.route('/fetch-appointment-detail-by-appointment-id').get(async (req, res, next) => {
    const id = req.query.id;
    const medicineDetail = await sequelize.query(queries['find-medicine-detail-by-appointment-id'] + id)
    const analysisDetail = await sequelize.query(queries['find-analysis-detail-by-appointment-id'] + id)
    const diseaseDetail = await sequelize.query(queries['find-disease-detail-by-appointment-id'] + id)
    const reportDetail = await sequelize.query(queries['find-report-detail-by-appointment-id'] + id)
    res.json({
        'medicineDetail': medicineDetail,
        'analysisDetail': analysisDetail,
        'diseaseDetail': diseaseDetail,
        'reportDetail': reportDetail    
    });
});




    



module.exports = router;