'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

const contactInfo = [
    { icon: '📍', label: 'Visit Us', value: 'Available on Appointment' },
    { icon: '📞', label: 'Call Us', value: '+91 98765 43210' },
    { icon: '✉️', label: 'Email Us', value: 'hello@aadhidesigns.com' },
    { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat, 10am – 7pm' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setForm({ name: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    return (
        <section id="contact" className={styles.contact}>
            {/* Decorative top wave */}
            <div className={styles.wave} aria-hidden="true" />

            <div className={styles.inner}>
                {/* Left panel */}
                <div className={styles.left}>
                    <span className="section-label">Get In Touch</span>
                    <h2 className={styles.heading}>Let&apos;s Create Something Beautiful</h2>
                    <p className={styles.body}>
                        Whether you have a vision in mind or you&apos;re starting from scratch,
                        we&apos;d love to hear from you. Book a consultation and let&apos;s bring it to life.
                    </p>

                    <ul className={styles.infoList}>
                        {contactInfo.map(({ icon, label, value }) => (
                            <li key={label} className={styles.infoItem}>
                                <span className={styles.infoIcon}>{icon}</span>
                                <div>
                                    <span className={styles.infoLabel}>{label}</span>
                                    <span className={styles.infoValue}>{value}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right panel – form */}
                <div className={styles.right}>
                    {submitted ? (
                        <div className={styles.success}>
                            <div className={styles.successIcon}>✓</div>
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. We&apos;ll be in touch within 24 hours.</p>
                            <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label htmlFor="name">Full Name</label>
                                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="phone">Phone (optional)</label>
                                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                                </div>
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="email">Email Address</label>
                                <input id="email" name="email" type="email" placeholder="you@email.com" required value={form.email} onChange={handleChange} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="service">Service Interested In</label>
                                <select id="service" name="service" onChange={handleChange} defaultValue="">
                                    <option value="" disabled>Choose a service…</option>
                                    <option>Custom Tailoring</option>
                                    <option>Design Consultation</option>
                                    <option>Alterations</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" name="message" rows={4} placeholder="Tell us about your project…" required value={form.message} onChange={handleChange} />
                            </div>
                            <button type="submit" className={styles.submitBtn} disabled={loading}>
                                {loading ? <span className={styles.spinner} /> : 'Send Message →'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
