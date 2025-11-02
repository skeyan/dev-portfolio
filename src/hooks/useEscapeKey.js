import { useEffect } from 'react';

/**
 * Custom hook to handle Escape key press
 * @param {Function} onEscape - Callback function to execute when Escape is pressed
 * @param {boolean} isActive - Whether the listener should be active
 * @returns {void}
 */
export const useEscapeKey = (onEscape, isActive = true) => {
  useEffect(() => {
    if (!isActive) return;

    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onEscape, isActive]);
};

