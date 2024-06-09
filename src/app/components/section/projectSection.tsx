import { useTranslations } from 'next-intl';
import ButtonCard from '../ui/buttonCard';

export default function ProjectSection() {
    const t = useTranslations('project');

    return (
        <section id="home" className="text-center py-8 mt-16">
            <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg mb-16">{t('description')}</p>

            <div className="grid grid-cols-3 gap-4 mt-6">
                <ButtonCard imageSrc="/path/to/image1.png" title="Project 1" description="Description for Project 1" />
                <ButtonCard imageSrc="/path/to/image2.png" title="Project 2" description="Description for Project 2" />
                <ButtonCard imageSrc="/path/to/image2.png" title="Project 2" description="Description for Project 2" />
            </div>
        </section>
    );
}