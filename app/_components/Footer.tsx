import Link from 'next/link';
import { TechWaveLogo } from './Icons';

type LinkType = {
  name: string;
  href: string;
};

export default function Footer() {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <TechWaveLogo />
            <span className='ml-3 text-xl'>TechWave solutions</span>
          </a>
          <p className='mt-2 text-sm text-gray-500'>
            Creating new opportunities for your business.
          </p>
        </div>
        <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <Category
            title='Pages'
            links={[
              { name: 'Home', href: '' },
              { name: 'Services', href: 'services' },
              { name: 'Studies', href: 'studies' },
              { name: 'About', href: 'about' },
              { name: 'Contact', href: 'contact' },
            ]}
          />
          <Category
            title='Services'
            links={[
              {
                name: 'Custom Software Development',
                href: 'services/custom-software-development',
              },
              { name: 'Cloud Solutions', href: 'services/cloud-solutions' },
              {
                name: 'AI & Machine Learning<',
                href: 'services/ai-machine-learning',
              },
              {
                name: 'Consulting & Strategy',
                href: 'services/consulting-strategy',
              },
            ]}
          />
          <Category
            title='Studies'
            links={[
              { name: 'Challenge', href: 'challenge' },
              { name: 'Solution', href: 'solution' },
              { name: 'Result', href: 'result' },
            ]}
          />
          <Category
            title='Location'
            links={[
              {
                name: 'Bergen, Norway',
                href: '/https://www.google.com/maps/place/Bergen/@60.364778,5.0995504,10z/data=!3m1!4b1!4m6!3m5!1s0x46390d4966767d77:0x9e42a03eb4de0a08!8m2!3d60.3912628!4d5.3220544!16zL20vMGZtN3M?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D',
              },
            ]}
          />
        </div>
      </div>
      <div className='bg-gray-100'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p className='text-gray-500 text-sm text-center sm:text-left'>
            © 2024 TechWave solutions —
            <a
              href='https://twitter.com/knyttneve'
              rel='noopener noreferrer'
              className='text-gray-600 ml-1'
              target='_blank'
            >
              @sebastianmoldrup
            </a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
            <a className='text-gray-500'>
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a className='ml-3 text-gray-500'>
              <svg
                fill='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
            <a className='ml-3 text-gray-500'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
            <a className='ml-3 text-gray-500'>
              <svg
                fill='currentColor'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='0'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='none'
                  d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                ></path>
                <circle cx='4' cy='4' r='2' stroke='none'></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function Category({ title, links }: { title: string; links: LinkType[] }) {
  return (
    <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
      <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
        {title}
      </h2>
      <nav className='flex flex-col list-none mb-10'>
        {links.map((link) => (
          <Link
            href={'/' + link.href}
            className='text-gray-600 hover:text-gray-800'
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
