import React from 'react';

interface ButtonCardProps {
    imageWebpSrc: string;
    imageJpgSrc: string;
    title: string;
    description: string;
    url: string;
}
  
const ButtonCard: React.FC<ButtonCardProps> = ({ imageWebpSrc, imageJpgSrc, description, title, url }) => {
    return (
        <div className="max-w-sm mx-auto p-4">
            <a href={url} className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                <picture>
                    <source srcSet={imageWebpSrc} type="image/webp" />
                    <source srcSet={imageJpgSrc} type="image/jpeg" />
                    <img loading="lazy" src={imageJpgSrc} alt={title} className="w-full h-48 object-cover" />
                </picture>
                <div className="p-4 text-left">
                    <h2 className="text-sm text-gray-700 mb-2">{description}</h2>
                    <p className="text-medium font-bold">{title}</p>
                </div>
            </a>
        </div>
    );
};
  
export default ButtonCard;