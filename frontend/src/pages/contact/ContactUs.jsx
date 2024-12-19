import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setResponseMessage(result.message);
                setFormData({ name: '', email: '', message: '' }); // Reset form
            } else {
                setResponseMessage(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Failed to send message');
        }
    };

    return (
        <div className="bg-red-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h1 className="text-center text-red-600 text-3xl font-bold mb-6">Contact Us</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="text-red-600 mb-2" htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                />

                <label className="text-red-600 mb-2" htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                />

                <label className="text-red-600 mb-2" htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                    rows="4"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="bg-red-600 text-white p-3 rounded hover:bg-red-700 transition duration-200"
                >
                    Send Message
                </button>
            </form>
            {responseMessage && (
                <div className="mt-4 text-center text-red-600">{responseMessage}</div>
            )}
        </div>
    );
};

export default ContactUs;
