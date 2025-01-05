import { useTranslations } from 'next-intl';
import HomeSection from '../components/section/homeSection';
import TechSection from '../components/section/techSection';
import WorkSection from '../components/section/workSection';
import ProjectSection from '../components/section/projectSection';
import AboutSection from '../components/section/aboutSection';
import PodcastSection from '../components/section/podcastSection';

export default function Home() {
  const t = useTranslations('nav');

  return (
    <main className="flex flex-col bg-white dark:bg-gray-800 text-black dark:text-white pt-24 w-full">
      <HomeSection />
      <PodcastSection />
      <TechSection />
      <WorkSection />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
