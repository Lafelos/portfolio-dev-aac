"use client";

import { useTranslations } from 'next-intl';
import ButtonCard from '../ui/buttonCard';
import { usePathname } from 'next/navigation';

export default function ProjectSection() {
    const pathname = usePathname();
    const t = useTranslations('project');

    const segments = pathname.split('/');
    const locale = segments.length > 1 ? segments[1] : 'en';

    return (
        <section id="home" className="text-center py-8 mt-16">
            <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg mb-16">{t('description')}</p>

            <div className="grid grid-cols-3 gap-4 mt-6">
                <ButtonCard 
                    imageWebpSrc="/images/projects/tecno-web.webp"
                    imageJpgSrc="/images/projects/tecno-web.jpg"
                    description={t('info')}
                    title={t('web_dev')}
                    url={`/${locale}/desarrollo-web`}
                />
                <ButtonCard 
                    imageWebpSrc="/images/projects/inteligencia-artificial.webp"
                    imageJpgSrc="/images/projects/inteligencia-artifial.jpg"
                    description={t('info')}
                    title={t('ia_dev')}
                    url={`/${locale}/inteligencia-artificial`}
                />
                <ButtonCard 
                    imageWebpSrc="/images/projects/videogames.webp"
                    imageJpgSrc="/images/projects/videogames.jpg"
                    description={t('info')}
                    title={t('games_dev')}
                    url={`/${locale}/videojuegos`}
                />
            </div>
        </section>
    );
}
