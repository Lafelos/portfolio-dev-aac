import Project from '@/app/components/ui/project';
import { useTranslations } from 'next-intl';

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-white text-black border border-black",
    icon: "/images/icons/nextjs.svg",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: "/images/icons/tailwind.svg",
  },
  REACTJS: {
    name: "ReactJS",
    class: "bg-[#006A6C] text-white",
    icon: "/images/icons/react.svg",
  },
  LARAVEL: {
    name: "Laravel",
    class: "bg-[#6C0000] text-white",
    icon: "/images/icons/laravel.svg",
  },
};

export default function Home() {
  const t = useTranslations('web_development');

  const WEB_PROJECTS = [
    {
      title: "HechicerIA",
      description: t("description_hia"),
      link: "https://hechicer-ia.com/",
      image: "/images/projects/hechiceria/hechiceria-home.webp",
      tags: [TAGS.REACTJS, TAGS.TAILWIND, TAGS.LARAVEL],
    },
    {
      title: "Portfolio Dev",
      description: t("description_portfolio"),
      link: "https://www.andresantolino.com/es",
      github: "https://github.com/Lafelos/portfolio-dev-aac",
      image: "/images/projects/portfolio/portfolio.webp",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    },
  ];

  return (
    <section className="flex w-full min-h-screen flex-col items-center justify-between bg-white text-black pb-20">
      <div id="tech" className="text-center py-8 mt-16 w-full mx-auto container">
        <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg mb-16">{t('description')}</p>
      </div>

      <Project projects={WEB_PROJECTS} tags={TAGS} />
    </section>
  );
}
