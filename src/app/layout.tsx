import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Aadhi Designs – Expert Tailoring & Custom Design',
    description:
        'Premium custom tailoring, design consultation, and alterations. Crafted with passion. Worn with confidence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
