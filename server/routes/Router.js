const express = require('express');
const {saveContact,viewContact} = require('../controller/contactFormController')

const router = express.Router();

router.post('/save',  saveContact)
router.get('/view', viewContact)

module.exports = router;