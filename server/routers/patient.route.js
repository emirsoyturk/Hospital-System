const express = require('express')
const router = express.Router()
const { sequelize } = require('../models')
const { queries, add_medicine, add_analysis, add_disease, add_report } = require('../queries')

router.route('/fetch-names').get(async (req, res, next) => {
    
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


    



module.exports = router;