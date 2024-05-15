import { useState, useEffect } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(() => {
    // Check if window is defined (for server-side rendering)
    if (typeof window !== "undefined") {
      return window.innerWidth;
    } else {
      return 0; // Default width if window is not available
    }
  });

  useEffect(() => {
    const handleResize = () => {
      // Check if window is defined (for server-side rendering)
      if (typeof window !== "undefined") {
        setWidth(window.innerWidth);
      }
    };

    // Check if window is defined before adding event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      // Check if window is defined before removing event listener
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return width;
};
