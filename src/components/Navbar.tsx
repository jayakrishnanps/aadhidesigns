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

    // Glass effect after scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close on outside click
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
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav} ref={navRef}>
                <a href="#home" className={styles.logo} onClick={close}>
                    <Image
                        src="/assets/Logo1x1.png"
                        alt="Aadhi Designs"
                        width={64}
                        height={64}
                        className={styles.logoImg}
                        priority
                    />
                    <span className={styles.logoText}>Aadhi Designs</span>
                </a>

                <ul className={`${styles.navLinks} ${isOpen ? styles.navOpen : ''}`}>
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

                <button
                    className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                    aria-label="Toggle menu"
                    onClick={() => setIsOpen(p => !p)}
                >
                    <span /><span /><span />
                </button>
            </nav>
        </header>
    );
}
