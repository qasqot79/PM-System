const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Patient API
const patientAPI = require('./patient.api');
router.use('/patients', patientAPI);

// Doctor API
const doctorAPI = require('./doctor.api');
router.use('/doctors', doctorAPI);

// Appointment API
const appointmentAPI = require('./appointment.api');
router.use('/appointments', appointmentAPI);

// Inventory API
const inventoryAPI = require('./inventory.api');
router.use('/inventories', inventoryAPI);

// Billing API
const billingAPI = require('./billing.api');
router.use('/billings', billingAPI);

// Admin API
const adminAPI = require('./admin.api');
router.use('/admins', adminAPI);

// Login API
const AuthController = require('../controllers/auth.controller');
router.post('/login', AuthController.login);

module.exports = router;