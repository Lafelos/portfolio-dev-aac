'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ButtonLangMobile() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState('es');

    const changeLanguage = (newLang: string) => {
        const lowerCaseLang = newLang.toLowerCase();
        setLang(lowerCaseLang);
        setIsOpen(false);
        router.replace(`/${lowerCaseLang}`);
    };

    return (
        <div className="relative">
            <div className="flex mb-4">
                <button
                    onClick={() => changeLanguage("es")}
                    className={`menu-hover flex items-center justify-between font-semibold text-sm text-white border
                    rounded-3xl px-4 py-1 transition-all duration-200 hover:bg-purple-400 mr-6
                    ${lang === "es" ? 'bg-purple-400 dark:text-black' : 'dark:bg-gray-700 bg-slate-400 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white'}`}>
                    ES
                </button>

                <button
                    onClick={() => changeLanguage("en")}
                    className={`menu-hover flex items-center justify-between font-semibold text-sm text-white border
                    rounded-3xl px-4 py-1 transition-all duration-200 hover:bg-purple-400 mr-6
                    ${lang === "en" ? 'bg-purple-400 dark:text-black' : 'dark:bg-gray-700 bg-slate-400 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white'}`}>
                    EN
                </button>
            </div>
        </div>
    );
}