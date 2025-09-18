import Image from 'next/image';
import styles from './Testimonials.module.css';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'María González',
    location: 'Madrid, España',
    rating: 5,
    comment: 'Una experiencia increíble. La casa superó todas nuestras expectativas. Las vistas son espectaculares y la atención al detalle es perfecta. Definitivamente volveremos.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    date: 'Marzo 2024'
  },
  {
    name: 'Carlos Rodríguez',
    location: 'Buenos Aires, Argentina',
    rating: 5,
    comment: 'Perfecto para desconectar del estrés de la ciudad. La piscina privada y la tranquilidad del lugar hicieron que nuestras vacaciones fueran inolvidables.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    date: 'Febrero 2024'
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.avatarContainer}>
                  <Image
                    src={testimonial.avatar}
                    alt={`Avatar de ${testimonial.name}`}
                    width={60}
                    height={60}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.guestInfo}>
                  <h3 className={styles.guestName}>{testimonial.name}</h3>
                  <p className={styles.guestLocation}>{testimonial.location}</p>
                  <div className={styles.rating}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <p className={styles.comment}>"{testimonial.comment}"</p>
              
              <div className={styles.testimonialFooter}>
                <span className={styles.date}>{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
