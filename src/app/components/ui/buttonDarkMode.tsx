import React from "react";
import { useState } from "react";
import useDarkMode from '../../hooks/useDarkMode';


export default function ButtonDarkMode() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, toggleTheme] = useDarkMode();

    const handleModeMenuEnter = () => {
        setIsOpen(true);
    };

    const handleModeMenuLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative flex" onMouseEnter={handleModeMenuEnter} onMouseLeave={handleModeMenuLeave}>
            <a href="#"
               className={`menu-hover flex items-center justify-between text-white font-semibold text-sm rounded-2xl px-1 py-1 transition-all duration-200 z-50
               ${isOpen ? '' : (theme === 'dark' ? 'bg-gray-700' : 'bg-slate-400')}`}
            >
                <div className={`px-4 py-1 ${isOpen ? '' : 'rounded-2xl ' + (theme === 'dark' ? 'bg-purple-600' : 'bg-purple-400')} text-white`}>
                    {theme === 'dark' ? 'Dark' : 'Light'}
                </div>
            </a>

            {isOpen && (
                <div className={`absolute left-1/2 transform -translate-x-1/2 py-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-slate-400'} rounded-xl shadow-xl z-30 pt-10 p-1`}>
                    <a className={`flex space-x-2 px-4 py-1 cursor-pointer text-sm ${theme === 'dark' ? 'text-white' : 'text-black'} rounded-xl hover:bg-purple-400 hover:text-white`}
                       onClick={toggleTheme}
                    >
                        {theme === 'dark' ? 'Light' : 'Dark'}
                    </a>
                </div>
            )}
        </div>
    );
}