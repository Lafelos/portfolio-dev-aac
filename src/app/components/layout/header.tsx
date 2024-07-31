"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import ButtonLang from "../../components/ui/buttonLang";
import ButtonLangMobile from "../../components/ui/buttonLangMobile";
import ButtonDarkMode from "../ui/buttonDarkMode";

const Header = () => {
    const [showSubMenuTools, setShowSubMenuTools] = useState(false);
    const [showSubMenuDownloads, setShowSubMenuDownloads] = useState(false);
    const [showSubMenuMyAccount, setShowSubMenuMyAccount] = useState(false);
    const [isHoveringTools, setIsHoveringTools] = useState(false);
    const [isHoveringDownloads, setIsHoveringDownloads] = useState(false);
    const [isHoveringMyAccount, setIsHoveringMyAccount] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuFixed, setIsMenuFixed] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const t = useTranslations('nav');

    const pathname = usePathname();
    const segments = pathname.split('/');
    const locale = segments.length > 1 ? segments[1] : 'en';

    let currentPage = segments.length > 2 ? "/"+segments[2] : "/";

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsScrollingUp(currentScrollPos < prevScrollPos);
            setIsMenuFixed(currentScrollPos > prevScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleSubMenuEnterDownloads = () => {
        setShowSubMenuDownloads(true);
        setIsHoveringDownloads(true);
    };

    const handleSubMenuLeaveDownloads = () => {
        setShowSubMenuDownloads(false);
        setIsHoveringDownloads(false);
    };

    const toggleSubMenuTools = () => {
        setShowSubMenuTools(!showSubMenuTools);
    };

    const toggleSubMenuDownloads = () => {
        setShowSubMenuDownloads(!showSubMenuDownloads);
    };

    return (
        <nav className={`flex w-full items-center justify-between lg:justify-center p-3 bg-slate-200 h-100 ${isMobileMenuOpen ? "bg-black-menu z-20 fixed" : `bg-black-menu z-20 transition-all duration-1000 ease-in-out transform
        ${isMenuFixed ? 'fixed' : 'absolute'} ${isScrollingUp && !isMenuFixed ? '-translate-y-full' : 'translate-y-0'}`}`}>
            <div className="flex items-center z-50 xl:mx-16">
                <a href="/" aria-label="Home">
                    <img src="/images/icons/logo_lafelos.png" height="50" width="50" />
                </a>
            </div>
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black z-20 flex justify-start pt-28">
                    <div className="p-4 rounded-md overflow-y-auto h-screen w-screen">
                        <a href="/" className={`flex items-center justify-between py-2 px-4 text-lg text-white border-t-2 border-white
                        ${currentPage === "/" ? "text-yellow-main" : "text-white"}`}>
                            <span>{t('home')}</span>
                            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M12 19l7-7-7-7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <div className="relative">
                            <a href="#" className={`flex items-center justify-between py-2 px-4 text-lg text-white border-t-2 border-white
                            ${currentPage === "/current-anima" || currentPage === "/ava" ? "text-yellow-main" : "text-white"}`} onClick={toggleSubMenuTools}>
                                <span>{t('tools')}</span>
                                <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {showSubMenuTools ? (
                                        <path d="M5 12h14"></path>
                                    ) : (
                                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    )}
                                </svg>
                            </a>
                            {showSubMenuTools && (
                                <div className="absolute top-full mt-2">
                                    <a href="/current-anima" className={`block py-1 px-4 text-medium text-white
                                    ${currentPage === "/current-anima" ? "text-yellow-main" : "text-white hover:underline"}`}>
                                        Current Anima
                                    </a>
                                    <a href="/ava" className={`block py-1 px-4 text-medium text-white
                                    ${currentPage === "/ava" ? "text-yellow-main" : "text-white hover:underline"}`}>
                                        AVA
                                    </a>
                                </div>
                            )}
                        </div>
                        <a href="/about" className={`flex items-center justify-between py-2 px-4 text-lg text-white border-t-2 border-white
                        ${currentPage === "/about" ? "text-yellow-main" : "text-white"}`} style={{marginTop: showSubMenuTools ? 'calc(2rem + 65px)' : '0'}}>
                            <span>{t('speller')}</span>
                            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M12 19l7-7-7-7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <div className="relative">
                            <a href="#" className={`flex items-center justify-between py-2 px-4 text-lg text-white border-t-2 border-white
                               ${currentPage === "/downloads/current-anima" || currentPage === "/downloads/ava" ? "text-yellow-main" : "text-white"}`}
                               onClick={toggleSubMenuDownloads}>
                                <span>{t('downloads')}</span>
                                <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {showSubMenuDownloads ? (
                                        <path d="M5 12h14"></path>
                                    ) : (
                                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    )}
                                </svg>
                            </a>
                            {showSubMenuDownloads && (
                                <div className="absolute top-full mt-2">
                                    <a href="/current-anima#download" className={`block py-1 px-4 text-medium text-white
                                    ${currentPage === "/downloads/current-anima" ? "text-yellow-main" : "text-white hover:underline"}`}>
                                        Current Anima
                                    </a>
                                    <a href="/ava#try_ava" className={`block py-1 px-4 text-medium text-white
                                    ${currentPage === "/downloads/ava" ? "text-yellow-main" : "text-white hover:underline"}`}>
                                        AVA
                                    </a>
                                </div>
                            )}
                        </div>

                        {<a href="/contact" className={`flex items-center justify-between py-2 px-4 text-lg text-white border-t-2 border-b-2 border-white
                        ${currentPage === "/contact" ? "text-yellow-main" : "text-white"}`} style={{marginTop: showSubMenuDownloads ? 'calc(2rem + 65px)' : '0'}}>
                            <span>{t('contact')}</span>
                            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M12 19l7-7-7-7M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>}

                        <div className="fixed bottom-0 left-0 p-4">
                            <ButtonLangMobile />
                        </div>
                    </div>
                </div>
            )}
            <div className="hidden flex-grow xl:flex md:items-center xl:justify-center">
                <div className="flex-grow lg:flex xl:items-center xl:justify-center">
                    <div className="hidden md:flex lg:space-x-4 py-1 px-1 shadow lg:rounded-3xl bg-slate-400">
                        <a href="/"
                           className={`font-medium w-28 text-center py-1 rounded-2xl hover:bg-purple-400 hover:text-white transition duration-150 ease-in-out ${currentPage === "/" || currentPage === "/#home" ? "bg-purple-400 text-white" : "text-black"}`}>{t('home')}</a>
                        <a href="/#tech" className={`font-medium w-40 text-center py-1 rounded-2xl hover:bg-purple-400 hover:text-white transition duration-150 ease-in-out ${currentPage === "/#tech" ? "bg-purple-400 text-white" : "text-black"}`}>{t('tech')}</a>
                        <a href="/#work" className={`font-medium w-40 text-center py-1 rounded-2xl hover:bg-purple-400 hover:text-white transition duration-150 ease-in-out ${currentPage === "/#tech" ? "bg-purple-400 text-white" : "text-black"}`}>{t('experience')}</a>
                        <div className="relative flex" onMouseEnter={handleSubMenuEnterDownloads} onMouseLeave={handleSubMenuLeaveDownloads}>
                            <a href="#"
                               className={`font-medium w-36 text-center py-1 rounded-2xl hover:bg-purple-400 hover:text-white transition duration-150 ease-in-out z-50
                                          ${currentPage === "/desarrollo-web" ? "bg-purple-400 text-white" : "text-black"} ${showSubMenuDownloads && "bg-purple-400 text-white"}`}
                            >
                                {t('projects')}
                            </a>

                            {showSubMenuDownloads && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 py-2 px-1 w-36 bg-slate-400 rounded-lg shadow-xl z-20 pt-10">
                                    <a href={`/${locale}/desarrollo-web`} className={`block mb-1 px-2 py-2 font-semibold text-sm text-black text-center rounded-2xl hover:bg-purple-400 hover:text-white ${currentPage === "/desarrollo-web" ? "bg-purple-400 text-white" : "text-black"}`}>{t('web_dev')}</a>
                                    <a href={`/${locale}/desarrollo-ia`} className="block px-2 py-2 font-semibold text-sm text-black text-center rounded-2xl hover:bg-purple-400 hover:text-white">{t('ia_dev')}</a>
                                    <a href={`/${locale}/desarrollo-juegos`} className="block px-2 py-2 font-semibold text-sm text-black text-center rounded-2xl hover:bg-purple-400 hover:text-white">{t('vr_dev')}</a>
                                </div>
                            )}
                        </div>
                        {<a href="/#about"
                           className={`font-medium w-32 text-center py-1 rounded-2xl hover:bg-purple-400 hover:text-white transition duration-150 ease-in-out ${currentPage === "/contact" ? "bg-purple-400 text-white" : "text-black"}`}>{t('about')}</a>}
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="inline-flex rounded-md mx-5">
                        <ButtonLang />
                    </span>

                    <span className="inline-flex rounded-md mx-5">
                        <ButtonDarkMode />
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header;
