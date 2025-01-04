import React from 'react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      role="link"
      target="_blank"
      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-black border border-gray-500 dark:border-white dark:bg-gray-500 dark:text-white
      transition bg-white dark:bg-gray-800 dark:text-white border border-gray-600 
      focus-visible:ring-yellow-500/80 text-md hover:border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white 
      group max-w-fit rounded-xl focus:outline-none focus-visible:outline-none 
      focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
    >
      {children}
    </a>
  );
};

export default LinkButton;
