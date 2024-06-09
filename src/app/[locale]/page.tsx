import { useTranslations } from 'next-intl';
import HomeSection from '../components/section/homeSection';
import TechSection from '../components/section/techSection';
import WorkSection from '../components/section/workSection';
import ProjectSection from '../components/section/projectSection';
import AboutSection from '../components/section/aboutSection';

export default function Home() {
  const t = useTranslations('nav');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 bg-white text-black">
      <HomeSection />
      <TechSection />
      <WorkSection />
      <ProjectSection />
      <AboutSection />
    </main>
  );
}
