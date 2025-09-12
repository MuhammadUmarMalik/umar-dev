"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use a more efficient way to handle width without DOM manipulation on mount
  useEffect(() => {
    // Defer animation initialization until after page load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Small delay to ensure page has loaded core content
    
    return () => clearTimeout(timer);
  }, []);

  const startAnimation = useCallback(() => {
    if (!isLoaded) return;
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words, isLoaded]);

  useEffect(() => {
    if (!isAnimating && isLoaded) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation, isLoaded]);

  // Apply simpler animation for the entire word rather than individual letters
  return (
    <div 
      ref={containerRef} 
      className={cn("z-10 inline-block relative", className)}
      style={{ minWidth: "180px" }} // Approximate fixed width to prevent layout shifts
    >
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.3,
            }}
            exit={{
              opacity: 0,
              y: -20,
              position: "absolute",
            }}
            className="z-10 inline-block text-left px-2 whitespace-nowrap"
            key={currentWord}
          >
            {currentWord}
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoaded && (
        // Static placeholder while loading to prevent layout shift
        <span className="z-10 inline-block text-left px-2 whitespace-nowrap">
          {words[0]}
        </span>
      )}
    </div>
  );
}; 