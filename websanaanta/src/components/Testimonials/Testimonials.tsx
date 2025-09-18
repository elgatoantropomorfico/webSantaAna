import Image from 'next/image';
import styles from './Testimonials.module.css';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'María González',
    role: 'CEO de Agencia Creativa',
    location: 'Madrid, España',
    rating: 5,
    comment:
      'Una experiencia increíble. La casa superó todas nuestras expectativas. Las vistas son espectaculares y la atención al detalle es perfecta.',
    avatar: '/hero1.jpeg',
    date: 'Marzo 2024'
  },
  {
    name: 'Parvez Hossein',
    role: 'COO de Startup',
    location: 'Corrientes, Argentina',
    rating: 5,
    comment:
      'Servicio impecable y ubicación soñada. Ideal para venir en familia y descansar rodeados de naturaleza.',
    avatar: '/hero2.jpeg',
    date: 'Abril 2024'
  },
  {
    name: 'Shoikot Hasan',
    role: 'Emprendedor',
    location: 'Asunción, Paraguay',
    rating: 5,
    comment:
      'La comodidad de la casa y los detalles hacen la diferencia. ¡Volveremos sin dudas!',
    avatar: '/hero3.jpeg',
    date: 'Mayo 2024'
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? styles.starFilled : styles.starEmpty}>
        ★
      </span>
    ));
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Lo que dicen nuestros huéspedes</h2>
          <p className={styles.subtitle}>
            Experiencias reales de personas que han disfrutado de Casa Santa Ana
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.testimonialCard} ${i === 1 ? styles.featured : ''}`}>
              {/* Floating circular avatar */}
              <div className={styles.avatarRing}>
                <Image src={t.avatar} alt={`Avatar de ${t.name}`} fill sizes="96px" className={styles.avatar} />
              </div>
              {/* Stars */}
              <div className={styles.starsRow}>{renderStars(t.rating)}</div>
              {/* Name and role */}
              <h3 className={styles.guestName}>{t.name}</h3>
              {t.role && <p className={styles.role}>{t.role}</p>}
              {/* Quote */}
              <p className={styles.comment}>&ldquo;{t.comment}&rdquo;</p>
              <div className={styles.testimonialFooter}>
                <span className={styles.date}>{t.location} · {t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
