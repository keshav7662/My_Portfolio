const uploadProject = async (req, res) => {
    try {
        res.status(201).json({ message: 'Project uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading project' });
    }
}

const getAllProjects = async (req, res) => {
    try {
        res.status(200).json({ message: 'Retrieved all projects' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
}


module.exports = { uploadProject, getAllProjects }