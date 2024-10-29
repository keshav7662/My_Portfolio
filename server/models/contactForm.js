const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
        default: 0
    },
  
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('ContactSchema', contactSchema)