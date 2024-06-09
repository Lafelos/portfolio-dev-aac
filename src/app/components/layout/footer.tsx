import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="bg-slate-200 text-black">
            <div className="flex space-x-4 pt-8 mx-44 justify-end">
                <a href="mailto:andres.antolino.cazorla@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/icons/email.png" alt="Email Andrés" className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/andr%C3%A9s-antolino-0b9030ba/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/icons/linkedin.png" alt="LinkedIn Andrés" className="w-5 h-5" />
                </a>
                <a href="https://github.com/Lafelos" target="_blank" rel="noopener noreferrer">
                    <img src="/images/icons/github.png" alt="Github Andrés" className="w-5 h-5" />
                </a>
            </div>
    
            <hr className="border-t-2 border-gray-400 my-6 mx-44" />
    
            <div className="flex justify-between items-center pb-8 mx-44">
                <div className="flex space-x-4">
                    <a href="#home" className="hover:underline">{t('home')}</a>
                    <a href="#tech" className="hover:underline">{t('tech')}</a>
                    <a href="#experience" className="hover:underline">{t('experience')}</a>
                    <a href="#home" className="hover:underline">{t('web_dev')}</a>
                    <a href="#home" className="hover:underline">{t('ia_dev')}</a>
                    <a href="#home" className="hover:underline">{t('vr_dev')}</a>
                    <a href="#about" className="hover:underline">{t('about')}</a>
                </div>
                <div>
                    <p>{t('description')}</p>
                </div>
            </div>
        </footer>
    );
}