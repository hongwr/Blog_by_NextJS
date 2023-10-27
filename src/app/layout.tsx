import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: '홍왕열의 블로그',
        // 동적인 문자열을 넣을 떄 %s를 사용한다.
        template: '홍왕열의 블로그 | %s',
    },
    description: '프론트 개발자 홍왕열 블로그',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={inter.className} lang='en'>
            <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
                <Header />
                <main className='grow'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
