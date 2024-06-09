'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ButtonLang() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState('es');

    const changeLanguage = (newLang: string) => {
        const lowerCaseLang = newLang.toLowerCase();
        setLang(lowerCaseLang);
        setIsOpen(false);
        router.replace(`/${lowerCaseLang}`);
    };

    const handleLangMenuEnter = () => {
        setIsOpen(true);
    };

    const handleLangMenuLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative flex" onMouseEnter={handleLangMenuEnter} onMouseLeave={handleLangMenuLeave}>
            <a href="#"
               className={`menu-hover flex items-center justify-between text-white font-semibold text-sm rounded-2xl px-1 py-1 transition-all duration-200 z-50
               ${isOpen ? '' : 'bg-slate-400'}`}
            >
                <div className={`px-4 py-1 ${isOpen ? '' : 'rounded-2xl bg-purple-400 text-white'}`}>
                    {lang === "en" ? "EN" : "ES"}
                </div>
            </a>

            {isOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 py-1 bg-slate-400 rounded-xl shadow-xl z-30 pt-10 p-1">
                    <a className={`flex space-x-2 px-4 py-1 cursor-pointer text-sm text-black rounded-xl hover:bg-purple-400 hover:text-white`}
                       onClick={() => changeLanguage(lang === "en" ? "es" : "en")}
                    >
                        {lang === "en" ? "ES" : "EN"}
                    </a>
                </div>
            )}
        </div>
    );
}