import styles from './Footer.module.css';

const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Brand */}
                <div className={styles.brand}>
                    <span className={styles.brandName}>Aadhi Designs</span>
                    <p className={styles.tagline}>
                        Crafted for your story.<br />
                        Worn with confidence.
                    </p>
                </div>

                {/* Quick links */}
                <nav className={styles.linkGroup} aria-label="Footer navigation">
                    <span className={styles.groupTitle}>Quick Links</span>
                    <ul className={styles.linkList}>
                        {links.map(({ label, href }) => (
                            <li key={href}>
                                <a href={href} className={styles.link}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact info */}
                <div className={styles.linkGroup}>
                    <span className={styles.groupTitle}>Contact</span>
                    <ul className={styles.linkList}>
                        <li><span className={styles.link}>+91 98765 43210</span></li>
                        <li><span className={styles.link}>hello@aadhidesigns.com</span></li>
                        <li><span className={styles.link}>Mon – Sat, 10am – 7pm</span></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; 2026 Aadhi Designs. All rights reserved.</p>
                <p className={styles.credit}>Made with ♥ in India</p>
            </div>
        </footer>
    );
}
