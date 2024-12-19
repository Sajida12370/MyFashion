const express = require('express');
const Contact = require('./contact.model');
const router = express.Router();

// Post a new contact message
router.post('/send-message', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).send({ message: 'All fields are required' });
        }

        const newContact = new Contact({
            name,
            email,
            message,
        });

        await newContact.save();

        res.status(201).send({
            message: 'Message sent successfully',
            contact: newContact,
        });
    } catch (error) {
        console.error('Error sending message', error);
        res.status(500).send({ message: 'Failed to send message' });
    }
});

module.exports = router;
