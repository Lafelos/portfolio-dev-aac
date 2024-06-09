import { useTranslations } from 'next-intl';

export default function HomeSection() {
    const t = useTranslations('home');

    return (
        <section id="tech" className="text-center py-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center">
                        <div className="rounded-full overflow-hidden w-28 h-28 border-4 border-red-500 mr-4">
                            <img src="/images/photo_andres.jpg" alt="Imagen de Andrés" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="text-3xl font-bold">{t('title')} Andrés</h1>
                    </div>
                    <p className="text-lg">{t('description')}</p>
                    <div className="flex justify-center space-x-4">
                        <button className="border border-gray-500 bg-white text-black px-4 py-2 rounded-full">{t('contact')}</button>
                        <button className="border border-gray-500 bg-white text-black px-4 py-2 rounded-full">LinkedIn</button>
                        <button className="border border-gray-500 bg-white text-black px-4 py-2 rounded-full">Github</button>
                    </div>
                </div>
            </div>
        </section>
    );
}