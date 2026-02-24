import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            {/* Animated gradient background */}
            <div className={styles.bg} aria-hidden="true" />

            {/* Decorative blobs */}
            <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
            <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />

            <div className={styles.inner}>
                <span className={styles.badge}>✦ Premium Tailoring Studio</span>

                <h1 className={styles.heading}>
                    Crafted for <br />
                    <em>Your Story</em>
                </h1>

                <p className={styles.subtext}>
                    Aadhi Designs blends artisan craftsmanship with modern style —
                    creating garments that fit your body and express your identity.
                </p>

                <div className={styles.actions}>
                    <a href="#services" className={styles.btnPrimary}>
                        Explore Services
                    </a>
                    <a href="#contact" className={styles.btnOutline}>
                        Book a Consultation
                    </a>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <strong>15+</strong>
                        <span>Years of Craft</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.stat}>
                        <strong>500+</strong>
                        <span>Happy Clients</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.stat}>
                        <strong>1000+</strong>
                        <span>Garments Made</span>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <div className={styles.scrollCue} aria-hidden="true">
                <div className={styles.scrollLine} />
                <span>Scroll</span>
            </div>
        </section>
    );
}
