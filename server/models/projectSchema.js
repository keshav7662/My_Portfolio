const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    githubUrl: { type: String, required: true },
    deployedLink: { type: String, required: true },
    projectScreenShots: [{ type: String }],
});

module.exports = mongoose.model('Project', projectSchema);
