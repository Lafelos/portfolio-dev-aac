import { useTranslations } from 'next-intl';
import Timeline from '../ui/ExperienceList';

export default function WorkSection() {
    const t = useTranslations('work');

    return (
        <section id="work" className="text-center py-8 mt-16">
            <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg">{t('description')}</p>

            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 gap-4 space-y-24">
                    <Timeline />
                </div>
            </div>
        </section>
    );
}