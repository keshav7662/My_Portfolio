const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

app.use(express.json());

app.use(cors({}));

const contactRoutes = require('./routes/contactRoutes')
const projectRoutes = require('./routes/projectRoutes')
const authRoutes = require('./routes/authRoutes')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/auth', authRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/project', projectRoutes)

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log(`Server running on ${process.env.PORT}`);
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
    }
};

app.listen(process.env.PORT, startServer);
