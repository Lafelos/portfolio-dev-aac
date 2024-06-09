import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href}
      role="link" 
      className="inline-flex items-center text-lg font-medium text-purple-500 dark:text-purple-200 dark:hover:text-purple-300 hover:text-purple-700"
    >
      {children}
    </a>
  );
};

export default CustomLink;
