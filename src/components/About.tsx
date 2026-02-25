import styles from './About.module.css';

const VIDEO_URL = 'https://res.cloudinary.com/dfxb1wthw/video/upload/v1772031662/grok_video_2026-02-25-14-40-03_fq9rcr.mp4';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.inner}>

                {/* Left – brand block with video */}
                <div className={styles.left}>
                    <div className={styles.imgCard}>
                        <div className={styles.imgPlaceholder}>
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className={styles.brandVideo}
                            >
                                <source src={VIDEO_URL} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                {/* Right – copy */}
                <div className={styles.right}>
                    <span className="section-label">Our Story</span>
                    <h2 className={styles.heading}>Where Craft Meets Passion</h2>
                    <p className={styles.body}>
                        Aadhi Designs was born from a deep love for the art of tailoring.
                        We create garments that celebrate the people who wear them,
                        each one shaped by conversations, measurements, and the tiny
                        details that make a perfect fit.
                    </p>
                    <p className={styles.body}>
                        We believe that clothing is personal. Every client is treated
                        as a collaborator, not just a customer.
                    </p>
                </div>
            </div>
        </section>
    );
}
