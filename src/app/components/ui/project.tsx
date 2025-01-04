import React from 'react';
import LinkButton from './LinkButton';

interface Tag {
  name: string;
  class: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image: string;
  tags: Tag[];
}

interface ProjectProps {
  projects: Project[];
  tags: Record<string, Tag>;
}

const Project: React.FC<ProjectProps> = ({ projects, tags }) => {
  return (
    <section className={`section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}>
      <div className="flex flex-col gap-y-16">
        {projects.map(({ image, title, description, tags, link, github }, index) => (
          <article key={index} className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
            <div className="w-full md:w-1/2">
              <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <img alt={title} className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src={image} />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h3>
              <div className="flex flex-wrap mt-2">
                <ul className="flex flex-row mb-2 gap-x-2">
                  {tags.map((tag, idx) => (
                    <li key={idx}>
                      <span className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-1 w-full`}>
                        <img src={tag.icon} alt={tag.name} className="w-8 h-4" />
                        <span className='pr-3'>{tag.name}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 text-gray-700 dark:text-gray-400">{description}</div>
                <footer className="flex items-end justify-start mt-4 gap-x-4">
                  {github && (
                    <LinkButton href={github}>
                      <img src="/images/icons/github.svg" alt="Icono Github" className="w-5 h-5 mr-2" />
                      Code
                    </LinkButton>
                  )}
                  {link && (
                    <LinkButton href={link}>
                      <img src="/images/icons/link.svg" alt="Icono Github" className="w-5 h-5 mr-2" />
                      Preview
                    </LinkButton>
                  )}
                </footer>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
