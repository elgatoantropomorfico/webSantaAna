'use client';
import Image from 'next/image';
import BookingCalendar from '@/components/BookingCalendar/BookingCalendar';
import styles from './Hero.module.css';

export default function Hero() {

  return (
    <section className={styles.hero}>
      {/* Background Image (single) */}
      <div className={`${styles.slideBackground} ${styles.active}`}>
        <Image
          src={'/hero3.jpeg'}
          alt={'Casa Santa Ana - Imagen principal'}
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

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

      {/* No navigation dots (carousel removed) */}
    </section>
  );
}
