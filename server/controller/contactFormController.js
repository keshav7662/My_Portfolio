const ContactSchema = require('../models/contactForm');
const nodemailer = require('nodemailer');

const generateFooter = () => {
    return `
    <div style="text-align: center; margin-top: 20px;">
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 14px; color: #666;">Social Contacts :</p>
        <div style="padding: 10px;">
            <a href="mailto:keshavverma4721999@gmail.com" style="margin: 0 10px;">
                <img src="https://img.icons8.com/fluent/48/000000/email.png" alt="Email" style="width: 24px;">
            </a>
            <a href="https://www.linkedin.com/in/keshavkumar7662/" style="margin: 0 10px;">
                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" style="width: 24px;">
            </a>
        </div>
        <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} Keshav's Portfolio. All rights reserved.</p>
    </div>`;
};
const saveContact = async (req, res) => {
    try {
        const formData = req.body;
        const newUser = new ContactSchema(formData);
        await newUser.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.EMAIL_PASSWORD, 
            },
        });

       
        const adminEmailHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #4CAF50; text-align: center;">New Contact Form Submission</h2>
            <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${formData.name}</p>
            <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${formData.email}</p>
            <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${formData.message}</p>
            <hr style="margin: 20px 0;">
            <p style="font-size: 14px; color: #666; text-align: center;">This is an automated message from your website's contact form.</p>
        </div>`;

        
        const userEmailHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="color: #4CAF50; text-align: center;">Message Received!</h2>
            <p style="font-size: 16px; color: #333;">Hi <strong>${formData.name}</strong>,</p>
            <p style="font-size: 16px; color: #333;">Thank you for reaching out. I have received your message and will get back to you shortly.</p>
            <hr style="margin: 20px 0;">
            <p style="font-size: 14px; color: #666; text-align: center;">This is a confirmation that we received your inquiry.</p>
            ${generateFooter()} <!-- Add the footer with social links -->
        </div>`;


        
        const adminMailOptions = {
            from: formData.email,
            to: process.env.RECEIVER_EMAIL, 
            subject: `New Contact Form Submission from ${formData.name}`,
            html: adminEmailHTML,
        };

        const userMailOptions = {
            from: process.env.RECEIVER_EMAIL,
            to: formData.email, 
            subject: "Thank you for contacting me!",
            html: userEmailHTML,
        };

      
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
        

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
