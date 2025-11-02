import { useEffect } from 'react';

/**
 * Custom hook to handle clicks outside of specified elements
 * @param {Object|Array<Object>} refs - React ref(s) to element(s) that should not trigger the callback when clicked
 * @param {Function} onClickOutside - Callback function to execute when clicking outside
 * @param {boolean} isActive - Whether the listener should be active
 * @returns {void}
 */
export const useClickOutside = (refs, onClickOutside, isActive = true) => {
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (e) => {
      // Convert single ref to array for uniform handling
      const refsArray = Array.isArray(refs) ? refs : [refs];
      
      // Check if click is inside any of the excluded elements
      const clickedInside = refsArray.some((ref) => 
        ref?.current?.contains(e.target)
      );

      if (!clickedInside) {
        onClickOutside();
      }
    };

    // Use a slight delay to avoid closing immediately when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, onClickOutside, isActive]);
};

