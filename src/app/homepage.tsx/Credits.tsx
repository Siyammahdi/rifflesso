import React from 'react';

const credits = [
    { label: 'TYPE SET', value: 'Supreme, Gambarino & JetBrains Mono' },
    { label: 'DESIGNED BY', value: 'Michael Andreuzza' },
    { label: 'DEVELOPED BY', value: 'Michael Andreuzza' },
    { label: 'HOSTED ON', value: 'Netlify' },
    { label: 'IMAGES', value: 'Teenage Engineering' },
    {
        label: 'FOLLOW RIFLESSO',
        value: (
            <div className="space-x-4 flex flex-col">
                <a href="#" className="text-neutral-400  ml-4">X</a>
                <a href="#" className="text-neutral-400 ">Dribbble</a>
                <a href="#" className="text-neutral-400 ">Behance</a>
            </div>
        ),
    },
];

const Credits: React.FC = () => {
    return (
        <div className="flex py-16 px-4 sm:px-6 lg:px-8">
            <div className='w-1/2'>
                <h1 className="text-7xl font-serif text-neutral-600">Credits</h1>
            </div>
            <div className="w-1/2 space-y-5">
                {credits.map((credit, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                        <span className="font-semibold text-neutral-600 uppercase">{credit.label}</span>
                        <span className="text-neutral-400 font-medium mt-1 sm:mt-0">
                            {typeof credit.value === 'string' ? credit.value : credit.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Credits;
