import React from 'react';
import { useScrollAnimation } from 'Portfolio\src\hooks\UseScrollAnimation';

const ScrollReveal = ({ 
  children, 
  threshold = 0.1,
  className = '' 
}) => {
  const [elementRef, isVisible] = useScrollAnimation({ threshold });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;