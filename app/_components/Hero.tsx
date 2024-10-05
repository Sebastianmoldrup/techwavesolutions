import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row-reverse gap-8 items-center justify-center px-16 my-16 lg:my-32'>
      <Image
        src='/abstract.webp'
        width={300}
        height={100}
        alt='a blue and white abstract painting'
        className='rounded-md'
      />

      <div className='text-center md:text-start space-y-8'>
        <div className='flex flex-col items-center md:items-start container'>
          <h1 className='text-4xl font-bold'>Innovative Digital Solutions</h1>
          <h2 className='text-2xl font-medium text-gray-400 mt-2 md:ml-4'>
            for a Connected World.
          </h2>
        </div>
        <p className='text-xl max-w-[650px]'>
          Transforming your business through cutting-edge technology and
          software development.
        </p>
        <div className='space-x-4'>
          <Button className='shadow-xl'>
            <Link href='/services'>Learn More</Link>
          </Button>
          <Button className='shadow-xl' variant='secondary'>
            <Link href='/contact'>Get a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
