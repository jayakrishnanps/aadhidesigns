'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, []);

    const close = () => setIsOpen(false);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isOpen ? styles.menuOpen : ''}`}>
            <nav className={styles.nav} ref={navRef}>

                {/* ── Mobile: floating pill around logo + hamburger ── */}
                <div className={`${styles.mobilePill} ${scrolled ? styles.pillScrolled : ''}`}>
                    <a href="#home" className={styles.logo} onClick={close}>
                        <Image
                            src="/assets/Logo1x1.png"
                            alt="Aadhi Designs"
                            width={44}
                            height={44}
                            className={styles.logoImg}
                            priority
                        />
                        <span className={styles.logoText}>Aadhi Designs</span>
                    </a>

                    <button
                        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                        aria-label="Toggle menu"
                        onClick={() => setIsOpen(p => !p)}
                    >
                        <span /><span /><span />
                    </button>
                </div>

                {/* Desktop links (hidden on mobile) */}
                <ul className={styles.navLinks}>
                    {navItems.map(({ label, href }) => (
                        <li key={href}>
                            <a href={href} className={styles.navLink} onClick={close}>
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className={styles.navCta} onClick={close}>
                            Book Now
                        </a>
                    </li>
                </ul>

                {/* Mobile dropdown menu */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
                    {navItems.map(({ label, href }) => (
                        <a key={href} href={href} className={styles.mobileLink} onClick={close}>
                            {label}
                        </a>
                    ))}
                    <a href="#contact" className={styles.mobileCta} onClick={close}>
                        Book Now
                    </a>
                </div>
            </nav>
        </header>
    );
}
