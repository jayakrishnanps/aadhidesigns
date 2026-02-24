import styles from './Services.module.css';

const services = [
    {
        icon: '✂️',
        title: 'Custom Tailoring',
        description:
            'Every stitch tells your story. We take your exact measurements and craft garments that fit like a second skin, because you deserve nothing less than perfect.',
        tag: 'Most Popular',
    },
    {
        icon: '🎨',
        title: 'Design Consultation',
        description:
            'Unsure where to start? Our style experts guide you through fabric selection, silhouette choices, and colour pairings to create a look that is uniquely yours.',
        tag: '',
    },
    {
        icon: '📐',
        title: 'Alterations',
        description:
            'Breathe new life into existing garments. From quick fixes to complete restructuring, our tailors make sure every piece in your wardrobe fits flawlessly.',
        tag: '',
    },
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.inner}>
                <span className="section-label">What We Do</span>
                <h2 className={styles.heading}>Our Services</h2>
                <p className={styles.lead}>
                    From your first consultation to the final fitting, we handle every
                    detail with precision and passion.
                </p>

                <div className={styles.grid}>
                    {services.map(({ icon, title, description, tag }) => (
                        <div key={title} className={styles.card}>
                            {tag && <span className={styles.cardTag}>{tag}</span>}
                            <div className={styles.iconWrap}>
                                <span className={styles.icon}>{icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{title}</h3>
                            <p className={styles.cardDesc}>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
