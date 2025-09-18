"use client";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./GalleryCarousel.module.css";

interface GalleryCarouselProps {
  images: string[]; // paths relative to /public, e.g. "/hero3.jpeg"
}

// Utility: chunk array into groups of size n
const chunk = <T,>(arr: T[], size: number): T[][] => {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
};

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const slides = useMemo(() => chunk(images, 5), [images]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = (idx: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const slide = scroller.children[idx] as HTMLElement | undefined;
    if (slide) {
      scroller.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
      setCurrentSlide(idx);
    }
  };

  const goToPrevious = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section className={styles.gallerySection} aria-label="Galería de imágenes">
      <div className={styles.headerRow}>
        <h2 className={styles.title}>Galería</h2>
      </div>

      <div className={styles.scrollerWrap}>
        {/* Overlay navigation buttons (no sidebar) */}
        <button
          type="button"
          className={`${styles.overlayBtn} ${styles.left}`}
          onClick={goToPrevious}
          aria-label="Imagen anterior"
        >
          <ChevronLeft className={styles.navIcon} />
        </button>
        <button
          type="button"
          className={`${styles.overlayBtn} ${styles.right}`}
          onClick={goToNext}
          aria-label="Siguiente imagen"
        >
          <ChevronRight className={styles.navIcon} />
        </button>

        <div ref={scrollerRef} className={styles.scroller}>
          {slides.map((group, idx) => (
            <div key={idx} className={styles.slide}>
              {/* Layout: one large tile (first), four small tiles (rest) */}
              <div className={styles.grid}> 
                <div className={styles.largeTile}>
                  {group[0] && (
                    <Image
                      src={group[0]}
                      alt={`Foto ${idx * 5 + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.image}
                      priority={idx === 0}
                    />
                  )}
                </div>
                <div className={styles.smallTiles}>
                  {group.slice(1).map((src, j) => (
                    <div key={j} className={styles.smallTile}>
                      <Image
                        src={src}
                        alt={`Foto ${idx * 5 + j + 2}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className={styles.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className={styles.dotIndicators}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ''}`}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
