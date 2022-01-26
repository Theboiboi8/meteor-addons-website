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
            <a href="/addons" className={styles.card}>
              <h2> Browse Addons &rarr;</h2>
              <p>View the available addons</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>My GitHub &rarr;</h2>
              <p>View my GitHub page</p>
            </a>
          </div>
        </main>
        </div>
      </div>
    </>
  )
}
