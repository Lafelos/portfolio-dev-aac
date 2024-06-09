import { useTranslations } from 'next-intl';
import ButtonSocial from '../ui/buttonSocial';

export default function HomeSection() {
    const t = useTranslations('home');

    return (
        <section id="tech" className="text-center py-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-end">
                        <div className="rounded-full overflow-hidden w-20 h-20 border-4 border-red-500 mr-4">
                            <img src="/images/photo_andres.jpg" alt="Imagen de Andrés" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="text-3xl font-bold">{t('title')} Andrés</h1>
                    </div>
                    <p className="text-lg text-left mb-3">{t('description')}</p>
                    <p className="text-lg text-left mb-5">{t('description_second')}</p>
                    <div className="flex space-x-4">
                        <ButtonSocial url="mailto:andres.antolino.cazorla@gmail.com" iconSrc="/images/icons/email.png" alt={t('contact')} buttonText={t('contact')} />
                        <ButtonSocial url="https://www.linkedin.com/in/andr%C3%A9s-antolino-0b9030ba/" iconSrc="/images/icons/linkedin.png" alt="LinkedIn" buttonText="LinkedIn" />
                        <ButtonSocial url="https://github.com/Lafelos" iconSrc="/images/icons/github.png" alt="Github" buttonText="Github" />
                    </div>
                </div>
            </div>
        </section>
    );
}