'use client';

import { useState, FormEvent, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import Toast from './Toast';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
// Sign up at https://www.emailjs.com and replace these with your real values:
const EMAILJS_SERVICE_ID = 'service_kdrc8nf';
const EMAILJS_TEMPLATE_ID = 'template_2ow9krb';
const EMAILJS_PUBLIC_KEY = 'MODtRGleVF6swS5yz';
// ─────────────────────────────────────────────────────────────────────────────

const contactInfo = [
    { icon: '📍', label: 'Visit Us', value: 'Available on Appointment' },
    { icon: '📞', label: 'Call Us', value: '+91 98765 43210' },
    { icon: '✉️', label: 'Email Us', value: 'hello@aadhidesigns.com' },
    { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat, 10am – 7pm' },
];

export default function Contact() {
    const [form, setForm] = useState({
        name: '', email: '', phone: '', service: '', message: '',
    });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false);
    const [error, setError] = useState('');

    const closeToast = useCallback(() => setToast(false), []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
        if (error) setError('');
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const templateParams = {
            to_email: 'adithyaadithya093@gmail.com',
            from_name: form.name,
            from_email: form.email,
            phone: form.phone || 'Not provided',
            service: form.service || 'Not specified',
            message: form.message,
            reply_to: form.email,
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY,
            );
            setForm({ name: '', email: '', phone: '', service: '', message: '' });
            setToast(true);
        } catch {
            setError('Something went wrong. Please try again or email us directly.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section id="contact" className={styles.contact}>
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
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        id="name" name="name" type="text"
                                        required value={form.name} onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        id="phone" name="phone" type="tel"
                                        value={form.phone} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email" name="email" type="email"
                                    required value={form.email} onChange={handleChange}
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="service">Service Interested In</label>
                                <select id="service" name="service" value={form.service} onChange={handleChange} defaultValue="">
                                    <option value="" disabled>Choose a service…</option>
                                    <option>Custom Tailoring</option>
                                    <option>Design Consultation</option>
                                    <option>Alterations</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message" name="message" rows={4}
                                    required value={form.message} onChange={handleChange}
                                />
                            </div>

                            {error && <p className={styles.errorMsg}>{error}</p>}

                            <button type="submit" className={styles.submitBtn} disabled={loading}>
                                {loading ? <span className={styles.spinner} /> : 'Send Message →'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Branded toast */}
            <Toast
                message="Message sent! We'll get back to you within 24 hours."
                visible={toast}
                onClose={closeToast}
            />
        </>
    );
}
