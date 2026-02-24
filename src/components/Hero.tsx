import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.bg} aria-hidden="true" />
            <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
            <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />

            <div className={styles.inner}>
                <span className={styles.badge}>✦ Premium Tailoring Studio</span>

                <h1 className={styles.heading}>
                    Crafted for{' '}
                    <em>Your Story</em>
                </h1>

                <p className={styles.subtext}>
                    Aadhi Designs blends artisan craftsmanship with modern style,
                    creating garments that fit your body and express your identity.
                </p>

                <div className={styles.actions}>
                    <a href="#services" className={styles.btnPrimary}>
                        Explore Services <span className={styles.arrow}>→</span>
                    </a>
                    <a href="#contact" className={styles.btnOutline}>
                        Book a Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
