const express = require('express')
const router = express.Router()
const { sequelize } = require('../models')
const { queries, add_medicine, add_analysis, add_disease, add_report, add_appointment, add_patient } = require('../queries')

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

router.route('/add-appointment').post(async (req, res, next) => {
    const appointment = req.body;
    await sequelize.query(add_appointment(appointment.randevuNo, appointment.randevuTuru, appointment.randevuTarihi, appointment.doktorNo, appointment.hastaNo))
    console.log(appointment);
    res.json(appointment);
});

router.route('/add').post(async (req, res, next) => {
    const patient = req.body;
    console.log(patient);
    await sequelize.query(add_patient(patient.tcNo, patient.firstName, patient.lastName, patient.dateOfBirth, patient.bloodType, patient.gender, patient.height, patient.weight))
    res.json({});
});

router.route('/get-appointment-by-randevuNo').get(async (req, res, next) => {
    const randevuNo = req.query.randevuNo;
    const appointment = await sequelize.query(queries['find-appointment-by-randevuNo'] + randevuNo)
    res.json(appointment);
});

router.route('/get-analysis-by-detayNo').get(async (req, res, next) => {
    const detayNo = req.query.detayNo;
    const analysis = await sequelize.query(queries['find-analysis-by-detayNo'] + detayNo)
    res.json(analysis);
});

router.route('/get-medicine-by-detayNo').get(async (req, res, next) => {
    const detayNo = req.query.detayNo;
    const medicine = await sequelize.query(queries['find-medicine-by-detayNo'] + detayNo)
    res.json(medicine);
});

router.route('/get-disease-by-detayNo').get(async (req, res, next) => {
    const detayNo = req.query.detayNo;
    const disease = await sequelize.query(queries['find-disease-by-detayNo'] + detayNo)
    res.json(disease);
});

router.route('/get-report-by-detayNo').get(async (req, res, next) => {
    const detayNo = req.query.detayNo;
    const report = await sequelize.query(queries['find-report-by-detayNo'] + detayNo)
    res.json(report);
});


module.exports = router;