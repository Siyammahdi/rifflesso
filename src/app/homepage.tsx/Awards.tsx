import React from 'react';

const awards = [
  {
    year: 2021,
    title: 'Awwwards Site of the Day',
    description: 'Awarded for innovative design and creativity on our flagship project.',
  },
  {
    year: 2020,
    title: 'CSS Design Awards Winner',
    description: 'Recognized for outstanding design and usability in our recent web projects.',
  },
  {
    year: 2019,
    title: 'Webby Awards Honoree',
    description: 'Honored for exceptional web design and user experience in the digital landscape.',
  },
];

const Awards: React.FC = () => {
  return (
    <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-7xl text-neutral-600 font-serif">Our Awards</h1>
      <p className="mt-2 text-neutral-400">
        Celebrating our achievements in design and innovation.
      </p>

      <div className="mt-10 space-y-12">
        {awards.map((award) => (
          <div key={award.year} className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-neutral-600">{award.year}</h2>
            <h3 className="mt-5 text-4xl  text-neutral-600 font-serif">{award.title}</h3>
            <p className="mt-1 text-gray-600">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;