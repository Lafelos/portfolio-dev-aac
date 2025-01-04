import React from 'react';
import { useTranslations } from 'next-intl';
import TimelineEvent from './TimelineEvent';

const ExperienceList: React.FC = () => {
  const t = useTranslations('work');

  const EXPERIENCE = [
    {
      date: t("january")+" 2020 - Actualmente...",
      title: "Co-Founder & COO",
      company: "HechicerIA",
      description: t("description_hechicer"),
      link: "https://hechicer-ia.com/",
    },
    {
      date: t("august")+" 2024 - Actualmente...",
      title: "Podcaster - Marca Personal",
      company: "El Bit Perdido",
      description: t("description_bitperdido"),
      link: "https://www.youtube.com/@ElBitPerdido",
    },
    {
      date: t("february")+" 2022 - "+t("september")+" 2023",
      title: "Full Stack Developer",
      company: "Cortinadecor (Hounter Douglas Europe)",
      description: t("description_cortina"),
      link: "https://www.cortinadecor.com/",
    },
    {
      date: t("august")+" 2020 - "+t("september")+" 2021",
      title: "Full Stack Developer",
      company: "Movilfly",
      description: t("description_movilfly"),
      link: "https://www.movilfly.com/",
    },
    {
      date: t("august")+" 2015 - "+t("september")+" 2017",
      title: "Computer Technician",
      company: "Eurobyte",
      description: t("description_eurobyte"),
    },
  ];

  return (
    <ol className="relative mt-16 md:w-8/12 xl:w-6/12 w-11/12 mx-auto">
      {EXPERIENCE.map((experience, index) => (
        <li key={index}>
          <TimelineEvent {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default ExperienceList;
