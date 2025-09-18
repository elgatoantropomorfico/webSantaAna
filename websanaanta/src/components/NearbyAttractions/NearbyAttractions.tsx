import styles from './NearbyAttractions.module.css';

interface Attraction {
  icon: string;
  name: string;
  distance: string;
  description: string;
  type: string;
}

const attractions: Attraction[] = [
  {
    icon: '🏛️',
    name: 'Museo Histórico Guácaras',
    distance: 'Centro',
    description: 'Frente a la Plaza San Martín. Narración de los orígenes del lugar, desarrollo, costumbres y pobladores indígenas Guácaras. Visitas guiadas disponibles.',
    type: 'Historia'
  },
  {
    icon: '⛪',
    name: 'Parroquia Santa Ana de los Guácaras',
    distance: 'Centro',
    description: 'Monumento histórico nacional construido por frailes franciscanos, con tallas antiguas como la Dolorosa y el Cristo Yacente.',
    type: 'Religión'
  },
  {
    icon: '🚂',
    name: 'El Trencito "El Económico"',
    distance: 'Plaza Central',
    description: 'Tren de trocha angosta histórico con locomotoras y vagones restaurados. Un museo al aire libre frente a la plaza central.',
    type: 'Historia'
  },
  {
    icon: '🏭',
    name: 'Ingenio Primer Correntino',
    distance: '7 km',
    description: 'Centro azucarero histórico relevante. Conoce la historia productiva, legado industrial, chimeneas antiguas y viviendas de trabajadores.',
    type: 'Historia Industrial'
  },
  {
    icon: '🏘️',
    name: 'Calles Coloniales y Naturaleza',
    distance: 'Todo el pueblo',
    description: 'Casonas antiguas, calles de arena y césped. Lagunas cercanas ideales para picnic, mate y asados al aire libre.',
    type: 'Paisaje'
  },
  {
    icon: '🥭',
    name: 'Fiesta Provincial del Mango',
    distance: 'Centro',
    description: 'Evento gratuito con música, productores locales y gastronomía típica correntina: mango, chipá, torta parrilla.',
    type: 'Festivales'
  },
  {
    icon: '🎭',
    name: 'Casa de la Cultura',
    distance: 'Centro',
    description: 'Actividades artísticas, exposiciones y talleres culturales. Experiencias tranquilas en contacto con la naturaleza.',
    type: 'Cultura'
  },
  {
    icon: '🎵',
    name: 'Festival Chamamecero',
    distance: 'Centro',
    description: 'Festivales patronales, desfiles de jinetes y carretas, fiestas tradicionales y peregrinación de los Tres Pueblos a Itatí.',
    type: 'Tradición'
  }
];

export default function NearbyAttractions() {
  return (
    <section className={styles.attractions}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Qué conocer y hacer en Santa Ana de los Guácaras</h2>
          <p className={styles.subtitle}>
            Descubre la rica historia, cultura y tradiciones de este hermoso pueblo correntino
          </p>
        </div>

        <div className={styles.attractionsGrid}>
          {attractions.map((attraction, index) => (
            <div key={index} className={styles.attractionCard}>
              <div className={styles.attractionIcon}>{attraction.icon}</div>
              <div className={styles.attractionContent}>
                <div className={styles.attractionHeader}>
                  <h3 className={styles.attractionName}>{attraction.name}</h3>
                  <span className={styles.attractionDistance}>{attraction.distance}</span>
                </div>
                <span className={styles.attractionType}>{attraction.type}</span>
                <p className={styles.attractionDescription}>{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
