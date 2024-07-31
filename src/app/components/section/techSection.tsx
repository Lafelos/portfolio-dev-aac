import { useTranslations } from 'next-intl';

export default function TechSection() {
    const t = useTranslations('tech');

    return (
        <section id="tech" className="flex flex-col lg:w-9/12 xl:w-7/12 w-full mx-auto text-center py-8 px-3 mt-16">
            <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg md:mb-16 mb-8">{t('description')}</p>

            <div className="grid grid-cols-5 md:gap-20 gap-6 mt-6">
                <img src="/images/icons/tech/html.png" alt="HTML" title="HTML" className="md:w-24 md:h-24 w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/css.png" alt="CSS" title="CSS" className="md:w-24 md:h-24 w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/type-js.png" alt="JavaScript" title="JavaScript" className="md:w-24 md:h-24 w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/typescript.png" alt="TypeScript" title="TypeScript" className="md:w-24 md:h-24 w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/react.png" alt="Reactjs" title="Reactjs" className="md:w-24 md:h-20 w-12 h-10 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/tailwind.png" alt="Tailwind" title="Tailwind" className="md:w-24 md:h-24 w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/bootstrap.png" alt="Bootstrap" title="Bootstrap" className="md:w-24 md:h-24 w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/github.png" alt="Github" title="Github" className="md:w-24 md:h-24 w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/unreal.png" alt="Unreal Engine" title="Unreal Engine" className="md:w-24 md:h-24 w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110" />
                <img src="/images/icons/tech/unity.png" alt="Unity" title="Unity" className="md:w-24 md:h-24 w-12 h-12 mx-auto rounded-full transform transition-transform duration-300 hover:scale-110" />
            </div>
        </section>
    );
}