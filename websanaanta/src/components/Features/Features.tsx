import Image from 'next/image';
import styles from './Features.module.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: '🛏️',
    title: '2 Habitaciones',
    description: 'Cómodas habitaciones con camas queen size y ropa de cama premium',
    image: '/WhatsApp Image 2025-09-17 at 10.26.16 PM.jpeg'
  },
  {
    icon: '🛁',
    title: '2 Baños Completos',
    description: 'Baños modernos con ducha de lluvia y amenities de calidad',
    image: '/WhatsApp Image 2025-09-17 at 10.26.16 PM (1).jpeg'
  },
  {
    icon: '🍳',
    title: 'Cocina Equipada',
    description: 'Cocina completa con electrodomésticos modernos y utensilios',
    image: '/WhatsApp Image 2025-09-17 at 10.26.19 PM.jpeg'
  },
  {
    icon: '📶',
    title: 'WiFi de Alta Velocidad',
    description: 'Internet fibra óptica ideal para trabajo remoto y streaming',
    image: '/WhatsApp Image 2025-09-17 at 10.26.19 PM (1).jpeg'
  },
  {
    icon: '🌡️',
    title: 'Aire Acondicionado',
    description: 'Climatización en todas las habitaciones para tu comodidad',
    image: '/WhatsApp Image 2025-09-17 at 10.26.18 PM (3).jpeg'
  },
  {
    icon: '🚗',
    title: 'Estacionamiento',
    description: 'Plaza de parking privada incluida en la reserva',
    image: '/WhatsApp Image 2025-09-17 at 10.26.17 PM (1).jpeg'
  },
  {
    icon: '🏊‍♀️',
    title: 'Piscina Privada',
    description: 'Disfruta de una refrescante piscina solo para ti',
    image: '/WhatsApp Image 2025-09-17 at 10.26.18 PM.jpeg'
  },
  {
    icon: '🌅',
    title: 'Vista Panorámica',
    description: 'Vistas espectaculares a las montañas desde la terraza',
    image: '/WhatsApp Image 2025-09-17 at 10.26.17 PM.jpeg'
  }
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Todo lo que necesitas para una estancia perfecta</h2>
          <p className={styles.subtitle}>
            Comodidades modernas en un entorno natural único
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.cardImage}
                priority={index < 3}
              />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
