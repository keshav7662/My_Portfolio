const express = require('express');
const { saveContact, viewContact } = require('../controller/contactFormController');
const { authenticateAdmin, authorizeAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/save', saveContact)
router.get('/view',authenticateAdmin,authorizeAdmin, viewContact)

module.exports = router;