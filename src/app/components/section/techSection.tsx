import { useTranslations } from 'next-intl';

export default function TechSection() {
    const t = useTranslations('tech');

    return (
        <section id="home" className="text-center py-8">
            <h1 className="text-3xl font-bold">{t('title')}</h1>
            <p className="text-lg">{t('description')}</p>
        </section>
    );
}