'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { TechWaveLogo } from './Icons';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Studies', path: '/studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to prevent memory leaks
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <nav className='flex justify-between items-center px-8 py-4 lg:px-12 lg:py-8'>
      {/* Header */}
      <div className='flex items-center gap-x-2 text-xl font-bold px-4 py-2 rounded-md z-[9999]'>
        <TechWaveLogo />
        TechWave Solutions
      </div>

      {/* Desktop menu */}
      <ul className='hidden gap-x-8 text-lg font-semibold md:flex'>
        {pages.map((page, index) => (
          <li key={index} className='hover:scale-110'>
            <Link href={page.path || '/'}>{page.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <div
        className='grid place-content-center z-[9999] hover:cursor-pointer md:hidden w-[35px] h-[35px]'
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='-0.625 -0.625 20 20'
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke='#000000'
            height='35'
            width='35'
          >
            <path
              d='M3.515625 5.078125h11.71875M3.515625 9.375h11.71875m-11.71875 4.296875h11.71875'
              stroke-width='1.25'
            ></path>
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='-0.5 -0.5 35 35'
            height='25'
            width='25'
          >
            <path
              d='M30.728500520833332 4.245732291666666c0.8403755208333333 -1.0114203124999999 0.7065093749999999 -2.5136713541666666 -0.3049109375 -3.354046875s-2.5136713541666666 -0.7065005208333333 -3.354038020833333 0.3049197916666666L17 13.281551041666665 6.9304484375 1.1966052083333332C6.090081770833333 0.1851848958333333 4.5878218749999995 0.051318749999999996 3.5764104166666666 0.8916942708333332s-1.1452864583333333 2.342617708333333 -0.3049109375 3.354038020833333L13.89881927083333 17 3.2714994791666667 29.75426770833333c-0.8403755208333333 1.0114203124999999 -0.7065093749999999 2.5136713541666666 0.3049109375 3.354038020833333s2.5136713541666666 0.7065093749999999 3.354038020833333 -0.3049109375L17 20.71844895833333l10.0695515625 12.084945833333332c0.8403666666666665 1.0114203124999999 2.342617708333333 1.1452864583333333 3.354038020833333 0.3049109375s1.1452864583333333 -2.342617708333333 0.3049109375 -3.354038020833333L20.101180729166664 17 30.728500520833332 4.245732291666666Z'
              stroke-width='1.25'
            ></path>
          </svg>
        )}
      </div>

      {/*  Mobile menu */}
      {open && (
        <div className='absolute grid place-content-center w-screen h-screen top-0 right-0 bg-white'>
          <ul className='text-xl font-semibold space-y-4'>
            {pages.map((page, index) => (
              <li key={index} className='hover:scale-110'>
                <Link href={page.path || '/'}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
