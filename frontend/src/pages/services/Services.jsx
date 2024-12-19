import React from 'react';
import { FaTruck, FaRedo, FaUserTie, FaTags, FaLeaf } from 'react-icons/fa';

const servicesData = [
    {
        title: '🚚 Free Shipping',
        description: 'Free shipping on orders over $50. Enjoy shopping with no hidden fees!',
        icon: <FaTruck className="text-red-600 w-12 h-12" />,
        bgColor: 'bg-gradient-to-r from-red-500 to-red-600',
    },
    {
        title: '🔄 Easy Returns',
        description: 'Hassle-free returns within 30 days. Your satisfaction is our priority!',
        icon: <FaRedo className="text-red-600 w-12 h-12" />,
        bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    },
    {
        title: '👗 Personal Styling',
        description: 'Get expert styling advice tailored just for you. Elevate your fashion game!',
        icon: <FaUserTie className="text-red-600 w-12 h-12" />,
        bgColor: 'bg-gradient-to-r from-green-500 to-green-600',
    },
    {
        title: '💰 Exclusive Discounts',
        description: 'Subscribe for exclusive discounts and early access to our sales.',
        icon: <FaTags className="text-red-600 w-12 h-12" />,
        bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
    },
    {
        title: '🌱 Sustainable Fashion',
        description: 'Shop our eco-friendly collection made with sustainable materials.',
        icon: <FaLeaf className="text-red-600 w-12 h-12" />,
        bgColor: 'bg-gradient-to-r from-purple-500 to-purple-600',
    },
];

const reviewsData = [
    {
        text: "Absolutely love this shop! The quality is amazing and customer service is fantastic.",
        author: "Sarah J.",
    },
    {
        text: "Fast shipping and the products are exactly as described. Highly recommend!",
        author: "Emily R.",
    },
    {
        text: "Great selection of stylish clothes! I find something new every time I visit.",
        author: "Michael T.",
    },
    {
        text: "Sustainable choices made shopping guilt-free for me. Thank you for this!",
        author: "Laura W.",
    },
];

const Services = () => {
    return (
        <div className="p-8 bg-gray-100">
            <h1 className="text-5xl font-extrabold text-center text-red-600 mb-10">Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {servicesData.map((service, index) => (
                    <div key={index} className={`rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 cursor-pointer ${service.bgColor} text-white`}>
                        <div className="mb-4 p-4 bg-white rounded-full flex justify-center items-center transition duration-300 transform hover:scale-110">
                            {service.icon}
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>

            {/* Testimonial Section */}
            <div className="mt-12 p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-4xl font-bold text-red-600 text-center mb-6">What Our Customers Say</h2>
                <div className="space-y-6">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="text-center italic text-gray-700 border-b pb-4">
                            <blockquote className="text-lg">{`"${review.text}"`}</blockquote>
                            <p className="text-right font-bold text-red-600">- {review.author}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
                <a href="/shop" className="bg-red-600 text-white py-4 px-8 rounded-lg shadow-md hover:bg-red-700 transition duration-300 text-lg transform hover:scale-105 cursor-pointer">
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default Services;
