const express = require('express');
const { uploadProject, getAllProjects } = require('../controller/projectController');
const { authenticateAdmin, authorizeAdmin } = require('../middlewares/authMiddleware')

const router = express.Router();

router.get('/view', authenticateAdmin, authorizeAdmin, getAllProjects)
router.post('/upload', authenticateAdmin, authorizeAdmin, uploadProject)

module.exports = router;