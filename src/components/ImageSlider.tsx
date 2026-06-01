"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

export function ImageSlider({ images, interval = 4000, className = "" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slider image ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } ${className}`}
          priority={index === 0}
        />
      ))}
    </>
  );
}
