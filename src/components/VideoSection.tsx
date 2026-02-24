import styles from './VideoSection.module.css';

export default function VideoSection() {
    return (
        <div className={styles.wrapper}>
            <video autoPlay muted loop playsInline className={styles.video}>
                <source src="/assets/videos/IntroVideo.mp4" type="video/mp4" />
            </video>
            <div className={styles.overlay} />
        </div>
    );
}
