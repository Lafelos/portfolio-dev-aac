import React from 'react';

interface ButtonCardProps {
    imageSrc: string;
    title: string;
    description: string;
}
  
const ButtonCard: React.FC<ButtonCardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="max-w-sm mx-auto p-4">
            <button className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-700">{description}</p>
                </div>
            </button>
        </div>
    );
};
  
export default ButtonCard;