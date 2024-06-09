import { useTranslations } from 'next-intl';

export default function TechSection() {
    const t = useTranslations('tech');

    return (
        <section id="tech" className="text-center py-8 mt-16">
            <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg mb-16">{t('description')}</p>

            <div className="grid grid-cols-5 gap-20 mt-6">
                <img src="/images/icons/tech/html.png" alt="HTML" title="HTML" className="w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/css.png" alt="CSS" title="CSS" className="w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/type-js.png" alt="JavaScript" title="JavaScript" className="w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/typescript.png" alt="TypeScript" title="TypeScript" className="w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/react.png" alt="Reactjs" title="Reactjs" className="w-24 h-20 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/tailwind.png" alt="Tailwind" title="Tailwind" className="w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/bootstrap.png" alt="Bootstrap" title="Bootstrap" className="w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/github.png" alt="Github" title="Github" className="w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/unreal.png" alt="Unreal Engine" title="Unreal Engine" className="w-24 h-24 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/unity.png" alt="Unity" title="Unity" className="w-24 h-24 mx-auto rounded-full transform transition-transform duration-300 hover:scale-110" />
            </div>
        </section>
    );
}