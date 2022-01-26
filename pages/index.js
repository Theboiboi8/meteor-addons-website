import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Backdrop, Button, Collapse, Link, Text, theme } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { normalLoaders } from "@nextui-org/react";
import { Loading } from '@nextui-org/react'
import { Card } from "@nextui-org/react";
import { Navbar } from '../components/Navbar';
import { Container, Row, Col } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <Navbar className=" fixed"/>
      <div className=' selection:bg-slate-700 selection:text-slate-400'>
        <div className={styles.container}>
        <Head>
          <script async src="https://cdn.splitbee.io/sb.js"></script>
          <title>Meteor Addons</title>
          <meta name="description" content="An Archive OF Addons For Meteor Client" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      

        <main className={styles.main} css={{
          position: 'fixed',
        }}>
          <Text className=' select-none shadow-yellow-500'
          h1
          size={60}
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
            bf: 'saturate(75%) blur(10px)',
            border: '1px solid #eaeaea',
            borderRadius: '10px',
            fontFamily: 'Nunito, sans-serif',
          }}
          >
            <h1 className=' select-none'>
              Welcome To Meteor Addons
            </h1>
          </Text>

          <div className={styles.grid}>
            <Link href="/addons" >
              <a className={styles.card}>
                <h2> Browse Addons &rarr;</h2>
                <p>View the available addons</p>
              </a>
            </Link>
          </div>
        </main>
        <footer className={styles.footer} >
            <Link href='https://github.com/Theboiboi8'>
              Theboiboi8 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </Link>
          </footer>
        </div>
      </div>
    </>
  )
}
