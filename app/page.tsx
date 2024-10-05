import Image from 'next/image';
import Hero from './_components/Hero';
import Features from './_components/Features';
import Testimonials from './_components/Testimonials';

export default function Home() {
  {
    /* 
    TODO:
    - Fix testimonials image
    - Add sub page content
    - Fix footer links (location)
    - New seperator between testimonials and footer on /home
    - Studies sub page? or scroll down to studies section
  */
  }
  return (
    <div className='grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <main className='flex items-center justify-items-center flex-col w-full'>
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </div>
  );
}
