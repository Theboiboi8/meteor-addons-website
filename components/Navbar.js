import Link from 'next/link';
import { Button, Collapse, Text, theme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { normalLoaders } from "@nextui-org/react";
import { Loading } from '@nextui-org/react'
import { Card } from "@nextui-org/react";
import { ThemeModal } from './theme-modal';
import styles from '@tailwindcss/typography/src/styles';
import header from '../styles/Home.module.css'

export const Navbar = () => {
  return (
    <>
      <nav className='flex items-center bg-slate-700 flex-wrap p-3 select-none fixed w-full z-50 shadow-2xl' css={{
        bf: 'saturate(180%) blur(2000px)',
        bgColor: 'rgba(51, 65, 85, 0.5)',
      }}>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 relative '>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            <span className='text-xl text-white font-bold uppercase tracking-wide' css={{
            }}>
              Meteor Addons
            </span>
          </a>
        </Link>
        
      </nav>
    </>
  );
};


<div className=' hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
  <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
    <ThemeModal />
  </div>
</div>