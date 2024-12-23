import React from 'react';

const services = [
    "3D Design",
    "Design Systems",
    "Product Design",
    "UI/UX Design",
    "Web Development",
];

const Services: React.FC = () => {
    return (
        <div className="flex justify-between py-16 px-4 sm:px-6 lg:px-8">
            <div className='w-1/2'>
                <h1 className="text-7xl font-serif text-neutral-600">Our Services</h1>
            </div>
            <div className='w-1/2'>
                <p className="mt-2  text-neutral-600">
                    If collaboration within is of interest, kindly send us an email, and we will respond promptly.
                </p>
                <a
                    href="mailto:michael@riflesso.com"
                    className="block mt-4 text-2xl font-serif text-neutral-400 underline"
                >
                    michael@riflesso.com
                </a>

                <ul className="mt-10 space-y-4 text-6xl font-serif font-medium text-neutral-600">
                    {services.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Services;
