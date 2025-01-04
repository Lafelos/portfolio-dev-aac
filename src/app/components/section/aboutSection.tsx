import { useTranslations } from 'next-intl';
import ReadMore from '../ui/readMore';

export default function AboutSection() {
    const t = useTranslations('about');

    return (
        <section id="about" className="text-center py-8 mt-16 mb-20">
            <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg mb-16">{t('description')}</p>

            <div className="flex flex-col md:flex-row md:space-x-4 2xl:w-6/12 md:w-8/12 w-11/12 mx-auto">
                <img 
                    src="/images/photo_andres.jpg" 
                    alt="About Me" 
                    className="w-64 h-64 object-cover bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 p-1 mb-4 md:mb-0 mx-auto md:mx-0"
                />
                <div className='sm:text-lg text-sm text-left flex-1'>
                    <p className='mb-2'>{t('info')}</p>
                    <p className='mb-2'>{t('info_second')}</p>
                    <ReadMore text={t('info_third')} limit={0} />
                </div>
            </div>
        </section>
    );
}