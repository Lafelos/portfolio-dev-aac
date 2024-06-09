import { useTranslations } from 'next-intl';
import HomeSection from '../components/section/homeSection';
import TechSection from '../components/section/techSection';

export default function Home() {
  const t = useTranslations('nav');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <HomeSection />
      <TechSection />
    </main>
  );
}
