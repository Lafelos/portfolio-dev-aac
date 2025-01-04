import { useTranslations } from 'next-intl';
import ButtonSocial from '../ui/buttonSocial';

export default function HomeSection() {
    const t = useTranslations('home');

    return (
        <section id="home" className="text-center md:py-8 px-3">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-end">
                        <div className="rounded-full overflow-hidden w-20 h-20 border-4 border-purple-600 mr-4">
                            <img src="/images/photo_andres.jpg" alt="Imagen de Andrés" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="md:text-3xl text-lg font-bold text-left">{t('title')} Láfelos</h1>
                    </div>
                    <p className="sm:text-lg text-sm text-left mb-3">{t('description')}</p>
                    <p className="sm:text-lg text-sm text-left mb-5">{t('description_second')}</p>
                    <div className="flex space-x-4">
                        <ButtonSocial url="mailto:andres.antolino.cazorla@gmail.com" iconSrc="/images/icons/mail.svg" alt={t('contact')} buttonText={t('contact')} classes="text-sm" />
                        <ButtonSocial url="https://www.linkedin.com/in/andr%C3%A9s-antolino-0b9030ba/" iconSrc="/images/icons/linkedin.svg" alt="LinkedIn" buttonText="LinkedIn" classes="text-sm" />
                        <ButtonSocial url="https://github.com/Lafelos" iconSrc="/images/icons/github.svg" alt="Github" buttonText="Github" classes="text-sm" />
                    </div>
                </div>
            </div>
        </section>
    );
}