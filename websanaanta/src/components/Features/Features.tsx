import styles from './Features.module.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🛏️',
    title: '2 Habitaciones',
    description: 'Cómodas habitaciones con camas queen size y ropa de cama premium'
  },
  {
    icon: '🛁',
    title: '2 Baños Completos',
    description: 'Baños modernos con ducha de lluvia y amenities de calidad'
  },
  {
    icon: '🍳',
    title: 'Cocina Equipada',
    description: 'Cocina completa con electrodomésticos modernos y utensilios'
  },
  {
    icon: '📶',
    title: 'WiFi de Alta Velocidad',
    description: 'Internet fibra óptica ideal para trabajo remoto y streaming'
  },
  {
    icon: '🌡️',
    title: 'Aire Acondicionado',
    description: 'Climatización en todas las habitaciones para tu comodidad'
  },
  {
    icon: '🚗',
    title: 'Estacionamiento',
    description: 'Plaza de parking privada incluida en la reserva'
  },
  {
    icon: '🏊‍♀️',
    title: 'Piscina Privada',
    description: 'Disfruta de una refrescante piscina solo para ti'
  },
  {
    icon: '🌅',
    title: 'Vista Panorámica',
    description: 'Vistas espectaculares a las montañas desde la terraza'
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
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
