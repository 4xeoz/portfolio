import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { GoogleAnalytics } from '@next/third-parties/google';

const antonFont = localFont({
    src: './fonts/anton-latin-400-normal.woff2',
    weight: '400',
    style: 'normal',
    variable: '--font-anton',
});

const robotoFlex = localFont({
    src: './fonts/roboto-flex-latin-standard-normal.woff2',
    weight: '100 800',
    style: 'normal',
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Portfolio - Iyad Cherifi',
    description:
        'Personal portfolio of Iyad Cherifi, a computer science student.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <html lang="en">
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>

                {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
            </body>
        </html>
    );
}
