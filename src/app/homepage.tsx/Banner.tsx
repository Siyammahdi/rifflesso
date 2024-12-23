import Image from 'next/image';
import React from 'react';

// Reusable ProjectCard component
interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, image }) => {
  return (
    <div className="">
      {/* Image Section */}
      <div className="bg-gray-200 rounded-lg shadow-lg">
        <Image
          src={image}
          alt={title}
          width={1000} // Set appropriate width for Next.js optimization
          height={1000} // Set appropriate height for Next.js optimization
          className=" transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Text Section */}
      <div className="mt-4 text-left">
        <h3 className="text-lg font-semibold text-neutral-600">{title}</h3>
        <p className="text-sm text-neutral-500">{subtitle}</p>
      </div>
    </div>
  );
};

// Projects array
export const projects = [
  {
    id: 1,
    title: 'MicroPhone',
    subtitle: 'Website & Branding',
    image: '/assets/ipad.svg',
  },
  {
    id: 2,
    title: 'Fusion Events',
    subtitle: 'Concert Series',
    image: '/assets/w6.svg',
  },
  {
    id: 3,
    title: 'Zenith Architecture',
    subtitle: 'Modernist Residence',
    image: '/assets/w7.svg',
  },
  {
    id: 4,
    title: 'Pixel Perfect',
    subtitle: 'E-commerce Website',
    image: '/assets/w8.svg',
  },
  {
    id: 5,
    title: 'Apex Dynamics',
    subtitle: 'Mobile Application',
    image: '/assets/w9.svg',
  },
  {
    id: 6,
    title: 'Creative Minds',
    subtitle: 'Educational Program',
    image: '/assets/w10.svg',
  },
  {
    id: 7,
    title: 'Field',
    subtitle: 'Website, Branding',
    image: '/assets/w2.svg',
  },
  {
    id: 8,
    title: 'Musico',
    subtitle: 'UI/UX',
    image: '/assets/w3.svg',
  },
  {
    id: 9,
    title: 'Magic Radio',
    subtitle: 'Magic Radio',
    image: '/assets/w4.svg',
  },
];

const Banner = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-40 py-12">
      {/* Hero Section */}
      <section className="text-left mb-16 px-4">
        <h1 className="text-6xl font-serif leading-tight text-neutral-600">
          Crafting unique digital experiences where code and creativity converge
          to shape your vision in your everyday.
        </h1>
      </section>

      {/* Project Grid */}
      <section className="space-y-12">
        {/* First Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
            />
          ))}
        </div>

        {/* Second Row - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {projects.slice(2, 5).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
            />
          ))}
        </div>

        {/* Third Row - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          {projects.slice(5, 9).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;
