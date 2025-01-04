import Project from '@/app/components/ui/project';
import { useTranslations } from 'next-intl';

const TAGS = {
  UNITY: {
    name: "Unity",
    class: "bg-white text-black border border-black",
    icon: "/images/icons/unity.svg",
  },
  UNREALENGINE: {
    name: "Unreal Engine",
    class: "bg-white text-black border border-black",
    icon: "/images/icons/unreal.svg",
  },
};

export default function Home() {
  const t = useTranslations('game_development');

  const WEB_PROJECTS = [
    {
      title: "Current Anima",
      description: t("description_ca"),
      link: "https://hechicer-ia.com/current-anima",
      image: "/images/projects/current-anima/current-anima.webp",
      tags: [TAGS.UNREALENGINE],
    },
    {
      title: "AVA",
      description: t("description_ava"),
      link: "https://avatar.hechicer-ia.com/virtual-assistant",
      image: "/images/projects/ava/ava-web.webp",
      tags: [TAGS.UNITY],
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
