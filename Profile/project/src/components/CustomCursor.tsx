import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleHover);
      element.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleHover);
        element.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${isHovering ? 'hover' : ''}`}
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${dotPosition.x - 2}px, ${dotPosition.y - 2}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;