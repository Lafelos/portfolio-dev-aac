// ContactButton.tsx
import React from 'react';

interface ButtonSocialProps {
  url: string;
  iconSrc: string;
  alt: string;
  buttonText: string;
  classes: string;
}

const ButtonSocial: React.FC<ButtonSocialProps> = ({ url, iconSrc, alt, buttonText, classes }) => {
  return (
    <a 
      href={url}
      className={`relative flex items-center border border-gray-500 bg-white text-black md:px-4 px-2 py-2 rounded-full hover:border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white ${classes}`}
      target='_blank'
    >
      <img src={iconSrc} alt={alt} className="md:w-5 md:h-5 w-4 h-4 md:mr-2 mr-1" />
      {buttonText}
    </a>
  );
};

export default ButtonSocial;
