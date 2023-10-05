import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={inter.className} lang='en'>
            <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
                <Header />
                <main className='grow bg-sky-400'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
