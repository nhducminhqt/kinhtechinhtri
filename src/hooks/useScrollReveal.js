import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect when an element becomes 50% visible on screen
 * Returns a ref to attach to the element and a boolean indicating visibility
 */
function useScrollReveal(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const {
    threshold = 0.1, // 10% visible
    triggerOnce = true, // only trigger animation once
    rootMargin = "0px",
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // If triggerOnce is true, stop observing after first trigger
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return [elementRef, isVisible];
}

export default useScrollReveal;
