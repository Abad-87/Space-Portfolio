"use client";

import { useEffect } from "react";

export const NetlifyBlocker = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const removeNetlifyElements = () => {
      // Find all iframes, elements, or overlays injected by Netlify
      const selectors = [
        'iframe[src*="netlify"]',
        'iframe[id*="netlify"]',
        'iframe[class*="netlify"]',
        'div[id*="netlify"]',
        'div[class*="netlify"]',
        '#netlify-drawer-root',
        '.netlify-drawer-container',
        '[id^="netlify-"]',
        '[class^="netlify-"]'
      ];

      try {
        const elements = document.querySelectorAll(selectors.join(", "));
        elements.forEach((el) => {
          el.remove();
        });
      } catch (err) {
        // Silent catch
      }
    };

    // Run immediately on mount
    removeNetlifyElements();

    // Set up MutationObserver to detect and instantly delete any injected drawer elements
    const observer = new MutationObserver(() => {
      removeNetlifyElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Run a repeated check fallback for the first 10 seconds (as widgets can sometimes delay load)
    const interval = setInterval(removeNetlifyElements, 300);
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 12000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return null;
};
