import React from 'react';
import TimelineEvent from './TimelineEvent';

const EXPERIENCE = [
  {
    date: "Enero 2020 - Actualmente...",
    title: "Co-Founder & COO",
    company: "HechicerIA",
    description:
      "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
    link: "https://hechicer-ia.com/",
  },
  {
    date: "Febrero 2022 - Septiembre 2023",
    title: "Full Stack Developer",
    company: "Cortinadecor (Hounter Douglas Europe)",
    description:
      "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
    link: "https://www.cortinadecor.com/",
  },
  {
    date: "Agosto 2020 - Septiembre 2021",
    title: "Full Stack Developer",
    company: "Movilfly",
    description:
      "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
    link: "https://www.movilfly.com/",
  },
  {
    date: "Octubre 2015 - Septiembre 2017",
    title: "Computer Technician",
    company: "Eurobyte",
    description:
      "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
  },
];

const ExperienceList: React.FC = () => {
  return (
    <ol className="relative mt-16 md:w-6/12 w-11/12 mx-auto">
      {EXPERIENCE.map((experience, index) => (
        <li key={index}>
          <TimelineEvent {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceList;
