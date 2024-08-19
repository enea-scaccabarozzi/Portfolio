'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import '@/lib/env';

import { LampContainer } from '@/components/shared';

export default function Page() {
  return (
    <div className='h-screen overflow-hidden bg-slate-900'>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='mt-10 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center font-medium tracking-tight text-transparent lg:text-7xl'
        >
          <span className='block text-4xl font-extrabold uppercase lg:-mb-4 lg:text-9xl'>
            Enea
          </span>
          <span className='text-2xl font-bold uppercase lg:text-5xl'>
            Scaccabarozzi
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='mt-5 flex w-full flex-row content-between justify-between '
        >
          <Link className='flex items-center justify-center' href='about'>
            <span className='text-sm text-slate-300 text-opacity-25 transition hover:text-opacity-100 hover:underline sm:-ml-8 sm:text-lg'>
              About Me
            </span>
          </Link>
          <Link
            className='flex items-center justify-center'
            href='https://blog.eneascaccabarozzi.xyz'
            target='new'
          >
            <span className='flex items-center justify-center gap-1 text-sm text-slate-300 text-opacity-25 transition hover:text-opacity-100 hover:underline sm:text-lg '>
              Blog
              <span>
                <ArrowTopRightOnSquareIcon className='h-3 sm:h-4' />
              </span>
            </span>
          </Link>
          <Link className='flex items-center justify-center' href='contacts'>
            <span className='text-sm text-slate-300 text-opacity-25 transition hover:text-opacity-100 hover:underline sm:-mr-8 sm:text-lg'>
              Contact
            </span>
          </Link>
        </motion.div>
      </LampContainer>
    </div>
  );
}
