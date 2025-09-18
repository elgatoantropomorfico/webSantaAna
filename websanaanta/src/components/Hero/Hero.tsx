'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import BookingCalendar from '@/components/BookingCalendar/BookingCalendar';
import styles from './Hero.module.css';

const slides = [
  {
    image: '/hero1.jpeg',
    title: 'Bienvenidos a Casa Santa Ana',
    subtitle: 'Tu hogar lejos del hogar te espera con los brazos abiertos. Descubre la calidez de la hospitalidad correntina en cada rincón.'
  },
  {
    image: '/hero2.jpeg',
    title: 'Tranquilidad y Disfrute',
    subtitle: 'Sumérgete en la serenidad de Santa Ana de los Guácaras. Relájate y reconecta con la naturaleza en un ambiente de paz absoluta.'
  },
  {
    image: '/hero3.jpeg',
    title: 'Noches Únicas e Inolvidables',
    subtitle: 'Vive experiencias mágicas bajo el cielo estrellado. Cada noche en Casa Santa Ana será un recuerdo para toda la vida.'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.hero}>
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slideBackground} ${
            index === currentSlide ? styles.active : ''
          }`}
        >
          <Image
            src={slide.image}
            alt={`Casa Santa Ana - ${slide.title}`}
            fill
            priority={index === 0}
            className={styles.backgroundImage}
          />
          <div className={styles.overlay} />
        </div>
      ))}

      {/* Content Container with Title and Calendar */}
      <div className={styles.heroContent}>
        <div className={styles.contentContainer}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Bienvenidos a Casa Santa Ana</h1>
            <p className={styles.heroSubtitle}>
              Tu hogar lejos del hogar te espera con los brazos abiertos. Descubre la calidez de la hospitalidad correntina en cada rincón de Santa Ana de los Guácaras.
            </p>
            <div className={styles.heroStats}>
              <span className={styles.stat}>4 huéspedes</span>
              <span className={styles.stat}>2 habitaciones</span>
              <span className={styles.stat}>2 baños</span>
              <span className={styles.stat}>★ 4.9 (127 reseñas)</span>
            </div>
            <button className={styles.ctaButton}>
              Reservar Ahora
            </button>
          </div>
          
          <div className={styles.calendarWrapper}>
            <BookingCalendar />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className={styles.navigation}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.navDot} ${
              index === currentSlide ? styles.activeDot : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
