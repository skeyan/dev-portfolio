import { useEffect } from 'react';

/**
 * Custom hook to trap focus within a container element
 * @param {Object} containerRef - React ref to the container element
 * @param {boolean} isActive - Whether the focus trap should be active
 * @param {boolean} autoFocus - Whether to automatically focus the first element when trap activates
 * @returns {void}
 */
export const useFocusTrap = (containerRef, isActive, autoFocus = true) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    
    // Get all focusable elements within the container
    const focusableElements = container.querySelectorAll(
      'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // If no focusable elements, nothing to trap
    if (!firstElement) return;

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab (backward navigation)
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab (forward navigation)
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Focus first element when trap activates
    if (autoFocus) {
      firstElement.focus();
    }

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, [isActive, containerRef, autoFocus]);
};

