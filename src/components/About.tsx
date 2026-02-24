import styles from './About.module.css';

const stats = [
    { value: '15+', label: 'Years of Expertise' },
    { value: '500+', label: 'Satisfied Clients' },
    { value: '1000+', label: 'Garments Crafted' },
    { value: '100%', label: 'Bespoke & Personal' },
];

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.inner}>

                {/* Left – brand block */}
                <div className={styles.left}>
                    <div className={styles.imgCard}>
                        <div className={styles.imgPlaceholder} aria-hidden="true">
                            <span className={styles.monogram}>AD</span>
                        </div>
                        <div className={styles.floatingTag}>Est. 2009</div>
                    </div>
                </div>

                {/* Right – copy + stats */}
                <div className={styles.right}>
                    <span className="section-label">Our Story</span>
                    <h2 className={styles.heading}>Where Craft Meets Passion</h2>
                    <p className={styles.body}>
                        Aadhi Designs was born from a deep love for the art of tailoring. For over
                        fifteen years we have been creating garments that celebrate the people who
                        wear them — each one shaped by conversations, measurements, and the tiny
                        details that make a perfect fit.
                    </p>
                    <p className={styles.body}>
                        We believe that clothing is personal. That&apos;s why every client is treated
                        as a collaborator — not just a customer.
                    </p>

                    <div className={styles.statsGrid}>
                        {stats.map(({ value, label }) => (
                            <div key={label} className={styles.stat}>
                                <strong className={styles.statValue}>{value}</strong>
                                <span className={styles.statLabel}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
