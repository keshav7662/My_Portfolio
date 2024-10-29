const ContactSchema = require('../models/contactForm');

const saveContact = async (req, res) => {
    try {
        const formData = req.body;
        const newUser = new ContactSchema(formData);
        await newUser.save();

        return res.status(200).json({
            status: "success",
            message: "Thank you for reaching out! Your message has been received, and I'll get back to you soon."
        });

    } catch (error) {
        console.error("Error saving contact form: ", error);

        return res.status(500).json({
            status: "error",
            message: "Sorry, something went wrong while submitting your message. Please try again later."
        });
    }
};

const viewContact = async (req, res) => {
    try {
        res.status(200).send('Contacts viewed successfully!');
    } catch (error) {
        console.error("Error viewing contacts: ", error);
        res.status(500).json({
            status: "error",
            message: "Unable to retrieve contacts at the moment. Please try again later."
        });
    }
};

module.exports = { saveContact, viewContact };
