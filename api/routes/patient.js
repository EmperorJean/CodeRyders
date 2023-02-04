const express = require('express');
const router = express.Router();

const PatientController = require('../controllers/patient-controller');

router.get('/', PatientController.getPatient);
router.get('/:id', PatientController.getPatientWithId);

module.exports = router;
