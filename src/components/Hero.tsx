import React from 'react';
import Image from 'next/image';
import profileImage from '../../public/images/og.png';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='text-center'>
            <Image src={profileImage} alt='Picture of the author' className='mx-auto rounded-full' width={200} height={200} priority />
            <h2 className='text-3xl font-bold mt-2'>Hi, I&apos;m Hong</h2>
            <h3 className='text-xl font-semibold'>Front-end Engineer</h3>
            <p>홍왕열</p>
            <Link href='/contact'>
                <button className='bg-yellow-500 font-bold py-1 px-4 mt-2 rounded-xl'>Contact Me</button>
            </Link>
        </section>
    );
}
