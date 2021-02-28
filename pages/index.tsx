import Head from 'next/head';
import { CompleteChalengers } from '../src/components/CompleteChalengers';
import { Profile } from '../src/components/Profile';
import { ExperienceBar } from '../src/components/ExperienceBar';
import { CountDown } from '../src/components/CountDown';
import { ChallengeBox } from '../src/components/ChallengeBox';

import styles from '../src/styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | Move.IT</title>
      </Head>

      <ExperienceBar />

      <section>

        <div>
          <Profile />
          <CompleteChalengers />
          <CountDown />
        </div>

        <div>
          <ChallengeBox />
        </div>

      </section>
    </div>
  )
}
