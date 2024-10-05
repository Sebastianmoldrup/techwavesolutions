import { Button } from '@/components/ui/button';
import { Key } from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  return (
    <div className='w-full bg-gray-300 shadow-xl'>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-16 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h2 className='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1'>
              Key features
            </h2>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              We help you grow your business
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Our services are designed to help you grow your business. We offer
              custom software development, cloud solutions, AI & machine
              learning, and consulting
            </p>
          </div>
          <div className='flex flex-wrap'>
            <KeyFeature
              title='Custom Software Development'
              description='We build custom software solutions that are tailored to your business needs.'
              link='/'
            />
            <KeyFeature
              title='Cloud Solutions'
              description='The cloud is the future. We help you migrate your business to the cloud.'
              link='/'
            />
            <KeyFeature
              title='AI & Machine Learning'
              description='Learn how AI and machine learning can help your business grow.'
              link='/'
            />
            <KeyFeature
              title='Consulting & Strategy'
              description='We provide consulting services to help you grow your business.'
              link='/'
            />
          </div>
          <Button className='flex mx-auto mt-16 text-white bg-indigo-500 border-0 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg hover:cursor-pointer'>
            <Link href='/services'>Our services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function KeyFeature({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className='xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60'>
      <h2 className='text-lg sm:text-xl text-gray-900 font-medium title-font mb-2'>
        {title}
      </h2>
      <p className='leading-relaxed text-base mb-4'>{description}</p>
      <Link href={link} className='text-indigo-500 inline-flex items-center'>
        Learn More
        <svg
          fill='none'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          className='w-4 h-4 ml-2'
          viewBox='0 0 24 24'
        >
          <path d='M5 12h14M12 5l7 7-7 7'></path>
        </svg>
      </Link>
    </div>
  );
}
