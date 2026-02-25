import styles from './Gallery.module.css';

const items = [
    'https://res.cloudinary.com/dfxb1wthw/image/upload/v1772033095/Untitled_lfu9at.png',
    'https://res.cloudinary.com/dfxb1wthw/image/upload/v1772033095/Untitled_1_qinj6f.png',
    'https://res.cloudinary.com/dfxb1wthw/image/upload/v1772033095/Untitled_3_zb9b0c.png',
    'https://res.cloudinary.com/dfxb1wthw/image/upload/v1772033095/Untitled_2_hkcfwq.png',
];

const spans = ['tall', '', '', 'wide'];

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
                    {items.map((src, i) => (
                        <div
                            key={i}
                            className={`${styles.item} ${spans[i] === 'tall' ? styles.tall : ''} ${spans[i] === 'wide' ? styles.wide : ''}`}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={src}
                                alt={`Gallery image ${i + 1}`}
                                className={styles.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
