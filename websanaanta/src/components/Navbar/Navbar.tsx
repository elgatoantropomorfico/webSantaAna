'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1 className={styles.logo}>Casa Santa Ana</h1>
        </div>
        
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <a href="#inicio" className={styles.navLink}>Inicio</a>
          <a href="#caracteristicas" className={styles.navLink}>Características</a>
          <a href="#testimonios" className={styles.navLink}>Testimonios</a>
          <a href="#alrededores" className={styles.navLink}>Alrededores</a>
          <a href="#contacto" className={styles.navLink}>Contacto</a>
        </div>

        <div className={styles.navActions}>
          <button className={styles.reserveBtn}>Reservar</button>
          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
