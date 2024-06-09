'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

interface ReadMoreProps {
  text: string;
  limit: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations('about');

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? text : text.substring(0, limit);

  return (
    <div className="text-left">
      <p>{displayText}{!isExpanded && '...'}</p>
      <button 
        onClick={toggleReadMore} 
        className="text-purple-500 hover:underline mt-2"
      >
        {isExpanded ? t('read_less') : t('read_more')}
      </button>
    </div>
  );
};

export default ReadMore;
