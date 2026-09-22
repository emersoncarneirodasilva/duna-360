"use client";

import { useState } from "react";
import { GALLERY_ITEMS } from "@/src/constants/galleryImages";

export function useGallery() {
  const [activeCategory, setActiveCategory] = useState("TODOS");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems =
    activeCategory === "TODOS"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const slides = filteredItems.map((item) => ({
    src: typeof item.image === "string" ? item.image : item.image.src,
    alt: item.imageAlt,
    title: item.title,
  }));

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handleCloseLightbox = () => setIsOpen(false);

  return {
    state: {
      activeCategory,
      isOpen,
      currentIndex,
      filteredItems,
      slides,
    },
    actions: {
      setActiveCategory,
      handleImageClick,
      handleCloseLightbox,
    },
  };
}
