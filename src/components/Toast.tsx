'use client';

import { useEffect } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
    message: string;
    visible: boolean;
    onClose: () => void;
}

export default function Toast({ message, visible, onClose }: ToastProps) {
    useEffect(() => {
        if (!visible) return;
        const t = setTimeout(onClose, 4000);
        return () => clearTimeout(t);
    }, [visible, onClose]);

    return (
        <div className={`${styles.toast} ${visible ? styles.show : ''}`}>
            <span className={styles.icon}>✓</span>
            <span className={styles.message}>{message}</span>
            <button className={styles.close} onClick={onClose} aria-label="Close">×</button>
        </div>
    );
}
