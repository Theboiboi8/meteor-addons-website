import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Collapse, Text, theme, Tooltip } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { normalLoaders } from "@nextui-org/react";
import { Loading } from '@nextui-org/react'
import { Card } from "@nextui-org/react";
import { Navbar } from '../components/Navbar';
import { Container, Row, Col } from '@nextui-org/react';
import { UpdatedDevAddon } from '../components/addon-latest-dev';
import { UpdatedReleaseAddon } from '../components/addon-latest-release';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=' selection:bg-slate-700 selection:text-slate-400'>
      <div className={styles.container}>
        <Head>
          <script async src="https://cdn.splitbee.io/sb.js"></script>
          <title>Meteor Addons - Addons</title>
          <meta name="description" content="Browse Addons" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Text className=' select-none shadow-yellow-500 '
          h1
          size={60}
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%',
            opacity: '1',
            fontFamily: 'Nunito, sans-serif',
          }}
          >
            <h1 className=' select-none'>
              Addons
            </h1>
          </Text>

          <div className={styles.grid}>
            <a
              href="https://github.com/SIMULATAN/meteor-notifications-addon"
              className={styles.card}
            >
              <h2>Meteor Notifications addon &rarr;  <UpdatedDevAddon /><UpdatedReleaseAddon /></h2>
              <p>This addon adds various (very customizable) notifications to the HUD of the Meteor Client.</p>
            </a>

            <a
              href="https://cally72jhb.github.io/website/"
              className={styles.card}
            >
              <h2>Vector Addon &rarr;  <UpdatedDevAddon /><UpdatedReleaseAddon /></h2>
              <p>
              Vector Addon is a powerful Addon for Meteor Client
              </p>
            </a>

            <a
              href="https://github.com/AntiCope/orion"
              className={styles.card}
            >
              <h2>Orion &rarr;  <UpdatedDevAddon /><UpdatedReleaseAddon /></h2>
              <p>
                Orion is a combat addon for Meteor Client
              </p>
            </a>

            <a
              href="https://github.com/maxsupermanhd/meteor-villager-roller"
              className={styles.card}
            >
              <h2>Villager Roller &rarr;  <UpdatedDevAddon /><UpdatedReleaseAddon /></h2>
              <p>
                Addon that changes villager profession until desired trade found
              </p>
            </a>

            <a
              href="https://github.com/kkllffaa/meteor-utils"
              className={styles.card}
            >
              <h2>Meteor Utils &rarr;  <UpdatedDevAddon /><UpdatedReleaseAddon /></h2>
              <p>
                Adds some modules & commands
              </p>
            </a>

            <a
              href="https://github.com/JFronny/MeteorAdditions"
              className={styles.card}
            >
              <h2>Meteor Additions &rarr;  <UpdatedDevAddon /><UpdatedReleaseAddon /></h2>
              <p>
                Addons for meteor, partially based off of/inspired by Wurst
              </p>
            </a>

            <a
              href="https://github.com/AntiCope/meteor-rejects"
              className={styles.card}
            >
              <h2>Meteor Rejects &rarr;  <UpdatedDevAddon /><UpdatedReleaseAddon /></h2>
              <p>
                An addon to Meteor Client that adds modules and commands that were too useless to be added to Meteor directly.
              </p>
            </a>

            <a
              href="https://github.com/Declipsonator/Meteor-Tweaks"
              className={styles.card}
            >
              <h2>Meteor Tweaks &rarr;  <UpdatedDevAddon /><UpdatedReleaseAddon /></h2>
              <p>
                A Meteor Client Addon that adds tweaks to modules and settings.
              </p>
            </a>
          </div>
        </main>
      </div>
      </div>
    </>
  )
}
