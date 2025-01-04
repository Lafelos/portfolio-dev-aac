import Project from '@/app/components/ui/project';
import { useTranslations } from 'next-intl';

const TAGS = {
  PYTHON: {
    name: "Python",
    class: "bg-[#65CEFF] text-black border border-black",
    icon: "/images/icons/python.svg",
  },
  YOLO: {
    name: "Yolo",
    class: "bg-[#C87AFF] text-black border border-black",
    icon: "/images/icons/yolo.svg",
  },
};

export default function Home() {
  const t = useTranslations('ai_development');

  const WEB_PROJECTS = [
    {
      title: t("title_next"),
      description: t("description_next"),
      link: "https://hechicer-ia.com/next/explorer",
      image: "/images/projects/next/next-app.webp",
      tags: [TAGS.PYTHON],
    },
    {
      title: t("title_sn"),
      description: t("description_sn"),
      link: "https://huggingface.co/spaces/Lafelos/sign_number_detector",
      github: "https://github.com/Lafelos/sign_number_detector_ai",
      image: "/images/projects/sign-number/sign-number.webp",
      tags: [TAGS.PYTHON],
    },
    {
      title: t("title_cp"),
      description: t("description_cp"),
      github: "https://github.com/Lafelos/people-counter-with-yolo",
      image: "/images/projects/count-people/count-people-yolo.webp",
      tags: [TAGS.PYTHON, TAGS.YOLO],
    },
  ];

  return (
    <section className="flex w-full min-h-screen flex-col items-center justify-between bg-white text-black dark:bg-gray-800 dark:text-white pb-20 px-5">
      <div id="tech" className="text-center py-8 mt-16 w-full mx-auto container">
        <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg mb-16">{t('description')}</p>
      </div>

      <Project projects={WEB_PROJECTS} tags={TAGS} />
    </section>
  );
}
