import styles from './Gallery.module.css';

const items = [
    { label: 'Bridal Collection', span: 'tall' },
    { label: 'Formal Wear', span: '' },
    { label: 'Casual Elegance', span: '' },
    { label: 'Occasion Wear', span: 'wide' },
];

export default function Gallery() {
    return (
        <section id="gallery" className={styles.gallery}>
            <div className={styles.inner}>
                <span className="section-label">Our Portfolio</span>
                <h2 className={styles.heading}>Crafted with Love</h2>
                <p className={styles.lead}>
                    A glimpse into our atelier, where every piece is a work of art.
                </p>

                <div className={styles.grid}>
                    {items.map(({ label, span }) => (
                        <div
                            key={label}
                            className={`${styles.item} ${span === 'tall' ? styles.tall : ''} ${span === 'wide' ? styles.wide : ''}`}
                        >
                            <div className={styles.itemOverlay}>
                                <span className={styles.itemLabel}>{label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <p className={styles.note}>
                    ✦ &nbsp;Actual work photos coming soon — follow us for previews
                </p>
            </div>
        </section>
    );
}
