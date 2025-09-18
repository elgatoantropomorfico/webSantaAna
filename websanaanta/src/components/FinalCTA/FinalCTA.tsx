import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.finalCTA}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>¿Listo para tu escapada perfecta?</h2>
          <p className={styles.ctaSubtitle}>
            Casa Santa Ana te espera con todas las comodidades para unas vacaciones inolvidables. 
            Reserva ahora y asegura las mejores fechas.
          </p>
          
          <div className={styles.ctaStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>★ 4.9</span>
              <span className={styles.statLabel}>Calificación</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>127</span>
              <span className={styles.statLabel}>Reseñas</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Recomendación</span>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              Reservar Ahora
            </button>
            <button className={styles.secondaryButton}>
              Contactar Anfitrión
            </button>
          </div>

          <div className={styles.ctaFooter}>
            <p className={styles.footerText}>
              📞 +34 123 456 789 | ✉️ info@casavistaserena.com
            </p>
            <p className={styles.footerNote}>
              Cancelación gratuita hasta 48 horas antes del check-in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
