// ContactButton.tsx
import React from 'react';

interface ButtonSocialProps {
  url: string;
  iconSrc: string;
  alt: string;
  buttonText: string;
}

const ButtonSocial: React.FC<ButtonSocialProps> = ({ url, iconSrc, alt, buttonText }) => {
  return (
    <a 
      href={url}
      className="relative flex items-center border border-gray-500 bg-white text-black px-4 py-2 rounded-full hover:border-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white"
      target='_blank'
    >
      <img src={iconSrc} alt={alt} className="w-5 h-5 mr-2" />
      {buttonText}
    </a>
  );
};

export default ButtonSocial;
